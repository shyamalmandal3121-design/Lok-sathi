
import {
initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import {
getFirestore,
collection,
getDocs,
doc,
updateDoc,
deleteDoc,
writeBatch
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {

apiKey:"AIzaSyCzYRZEYqtmJV6XzwxyXezbAT_um0-UIRI",

authDomain:"lok-sathi-782ec.firebaseapp.com",

projectId:"lok-sathi-782ec",

storageBucket:"lok-sathi-782ec.firebasestorage.app",

messagingSenderId:"755213857958",

appId:"1:755213857958:web:81a3566da61f3c1dbd7067",

measurementId:"G-P79834851N"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

let all = [];


const $ = id =>
document.getElementById(id);


const esc = x =>
String(x ?? "—").replace(
/[&<>"']/g,
m => ({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#039;"
}[m])
);


/* ================= LOAD ================= */

async function load(){

const snap =
await getDocs(
collection(db,"Complaints")
);

all =
snap.docs
.map(d => ({
docId:d.id,
...d.data()
}))
.sort(
(a,b) =>
(b.createdAt?.seconds || 0) -
(a.createdAt?.seconds || 0)
);

await syncPublicMirrors();

render();

}


/* ================= PUBLIC MIRROR ================= */

async function syncPublicMirrors(){

for(const c of all){

await updatePublic(c);

}

}


async function updatePublic(c){

const batch =
writeBatch(db);

batch.set(

doc(
db,
"ComplaintPublic",
c.docId
),

{

complaintID:
c.complaintID || c.docId,

category:
c.category || "",

state:
c.state || "",

district:
c.district || "",

pincode:
c.pincode || "",

status:
c.status || "Pending",

reach:
c.reach || "Received",

adminReply:
c.adminReply || "",

createdAt:
c.createdAt || new Date(),

updatedAt:
new Date()

},

{merge:true}

);

await batch.commit();

}


/* ================= RENDER ================= */

function render(){

let s =
$("search").value
.toLowerCase()
.trim();

let f =
$("filter").value;

let c =
$("cat").value;


let arr =
all.filter(x =>

(f === "all" ||
x.status === f) &&

(c === "all" ||
x.category === c) &&

(!s ||

[
x.complaintID,
x.name,
x.mobile,
x.category,
x.district,
x.state,
x.location
]
.join(" ")
.toLowerCase()
.includes(s)

)

);


$("total").textContent =
all.length;


$("pending").textContent =
all.filter(
x => x.status === "Pending"
).length;


$("progress").textContent =
all.filter(
x => x.status === "In Progress"
).length;


$("solved").textContent =
all.filter(
x => x.status === "Solved"
).length;


let today =
new Date()
.toISOString()
.slice(0,10);


$("today").textContent =
all.filter(
x =>
x.createdAt?.toDate?.()
.toISOString()
.slice(0,10) === today
).length;


$("complaints").innerHTML =

arr.length

? arr.map(card).join("")

: '<div class="card">📭 कोई complaint नहीं मिली।</div>';

}


/* ================= COMPLAINT CARD ================= */

function card(c){

let cl =
c.status === "In Progress"
? "InProgress"
: c.status;


return `

<div class="card">

<div class="head">

<div class="id">
🆔 ${esc(c.complaintID || c.docId)}
</div>

<span class="badge ${cl}">
${esc(c.status || "Pending")}
</span>

</div>


<div class="details">

<div class="d">
<small>नाम</small>
<b>${esc(c.name)}</b>
</div>

<div class="d">
<small>Mobile</small>
<b>${esc(c.mobile)}</b>
</div>

<div class="d">
<small>Category</small>
<b>${esc(c.category)}</b>
</div>

<div class="d">
<small>State / District</small>
<b>${esc(c.state)} / ${esc(c.district)}</b>
</div>

<div class="d">
<small>PIN</small>
<b>${esc(c.pincode)}</b>
</div>

<div class="d">
<small>Reach</small>
<b>${esc(c.reach || "Received")}</b>
</div>

</div>


<div class="desc">

<b>Location:</b>
${esc(c.location)}

<br>

<b>Description:</b>
${esc(c.description)}

<br>

<b>Admin Reply:</b>
${esc(c.adminReply || "—")}

</div>


<div class="actions">

<button
class="btn light"
onclick="editComplaint('${esc(c.docId)}')">
✏️ Edit
</button>

<button
class="btn light"
onclick="setStatus('${esc(c.docId)}','In Progress')">
🔵 In Progress
</button>

<button
class="btn light"
onclick="setStatus('${esc(c.docId)}','Solved')">
🟢 Solved
</button>

<button
class="btn danger"
onclick="removeComplaint('${esc(c.docId)}')">
🗑 Delete
</button>

</div>

</div>

`;

}


/* ================= STATUS ================= */

window.setStatus =
async (id,status) => {

try{

const complaintRef =
doc(db,"Complaints",id);

const publicRef =
doc(db,"ComplaintPublic",id);


const updateData = {

status:status,

updatedAt:new Date()

};


const batch =
writeBatch(db);


batch.update(
complaintRef,
updateData
);


batch.set(
publicRef,
updateData,
{merge:true}
);


await batch.commit();


const index =
all.findIndex(
x => x.docId === id
);


if(index !== -1){

all[index].status =
status;

all[index].updatedAt =
new Date();

}


render();


alert(
"✅ Complaint status successfully updated: " +
status
);


}catch(err){

console.error(
"Status Update Error:",
err
);
  alert(
"❌ Status update नहीं हुआ।\n\n" +
err.message
);

}

};


/* ================= DELETE ================= */

window.removeComplaint =
async id => {

if(
confirm(
"यह complaint permanently delete करें?"
)
){

const batch =
writeBatch(db);


batch.delete(
doc(db,"Complaints",id)
);


batch.delete(
doc(db,"ComplaintPublic",id)
);


await batch.commit();

await load();

}

};


/* ================= EDIT ================= */

window.editComplaint =
id => {

let c =
all.find(
x => x.docId === id
);


$("modalContent").innerHTML = `

<div class="field">

<label>Status</label>

<select id="mStatus">

<option>Pending</option>
<option>In Progress</option>
<option>Solved</option>

</select>

</div>


<div class="field">

<label>Reach / Office Stage</label>

<input
id="mReach"
value="${esc(c.reach || "Received")}"
>

</div>


<div class="field">

<label>Admin Reply</label>

<textarea
id="mReply"
rows="5"
>${esc(c.adminReply || "")}</textarea>

</div>


<button
class="btn primary"
onclick="saveEdit('${esc(id)}')">
Save Changes
</button>

`;


$("mStatus").value =
c.status || "Pending";


$("modal").style.display =
"block";

};


/* ================= SAVE EDIT ================= */

window.saveEdit =
async id => {

const status =
$("mStatus").value;

const reach =
$("mReach").value.trim();

const adminReply =
$("mReply").value.trim();


const batch =
writeBatch(db);


batch.update(

doc(db,"Complaints",id),

{

status,
reach,
adminReply,

updatedAt:
new Date()

}

);


batch.set(

doc(db,"ComplaintPublic",id),

{

status,
reach,
adminReply,

updatedAt:
new Date()

},

{merge:true}

);


await batch.commit();


closeModal();

await load();

};


/* ================= MODAL ================= */

window.closeModal =
() => {

$("modal").style.display =
"none";

};


/* ================= LOGIN ================= */

$("loginBtn").onclick =
async () => {

try{

$("loginError").style.display =
"none";


const email =
$("email").value.trim();

const password =
$("password").value;


if(!email || !password){

$("loginError").textContent =
"Email और Password डालें।";

$("loginError").style.display =
"block";

return;

}


await signInWithEmailAndPassword(
auth,
email,
password
);


}catch(e){

console.error(
"Login Error:",
e
);


$("loginError").textContent =
"Login failed: " + e.message;


$("loginError").style.display =
"block";

}
};


/* ================= LOGOUT ================= */

$("logoutBtn").onclick =
() => signOut(auth);


/* ================= REFRESH ================= */

$("refreshBtn").onclick =
async () => {

try{

await load();

}catch(err){

alert(
"❌ Refresh नहीं हो पाया।\n\n" +
err.message
);

}

};


/* ================= SEARCH ================= */

$("search").oninput =
render;


/* ================= FILTER ================= */

$("filter").onchange =
render;


/* ================= CATEGORY ================= */

$("cat").onchange =
render;


/* ================= CLEAR ================= */

$("clearBtn").onclick =
() => {

$("search").value =
"";

$("filter").value =
"all";

$("cat").value =
"all";

render();

};


/* ================= EXPORT ================= */

$("exportBtn").onclick =
() => {

let rows = [

[
"Complaint ID",
"Name",
"Mobile",
"Category",
"State",
"District",
"PIN",
"Location",
"Description",
"Status",
"Reach",
"Admin Reply"
],

...all.map(c => [

c.complaintID,
c.name,
c.mobile,
c.category,
c.state,
c.district,
c.pincode,
c.location,
c.description,
c.status,
c.reach,
c.adminReply

])

];


let csv =
rows
.map(
r =>
r
.map(
v =>
`"${String(v ?? "").replaceAll('"','""')}"`
)
.join(",")
)
.join("\n");


let a =
document.createElement("a");


a.href =
URL.createObjectURL(
new Blob(
[csv],
{type:"text/csv"}
)
);


a.download =
"lok-sathi-complaints.csv";

a.click();

};


/* ================= AUTH STATE ================= */

onAuthStateChanged(
auth,
async user => {

if(user){

/*
  Login successful.
  पहले सिर्फ Green/White Loader दिखेगा।
  Dashboard 5 seconds बाद खुलेगा.
*/

$("loginPage").style.display =
"none";

$("dashboard").style.display =
"none";

$("loadingPage").style.display =
"flex";


await new Promise(
resolve =>
setTimeout(resolve,5000)
);


$("loadingPage").style.display =
"none";

$("dashboard").style.display =
"block";


try{

await load();

}catch(err){

console.error(
"Dashboard Load Error:",
err
);

alert(
"Dashboard load नहीं हो पाया।\n\n" +
err.message
);

}

}else{

$("loginPage").style.display =
"grid";

$("loadingPage").style.display =
"none";

$("dashboard").style.display =
"none";

}

}

);