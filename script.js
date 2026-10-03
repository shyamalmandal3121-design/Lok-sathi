/* =========================================================
   LOK SATHI — SUPABASE SCRIPT.JS
   PART 1
   ========================================================= */

import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";


/* =========================================================
   SUPABASE CONFIG
   ========================================================= */

const SUPABASE_URL =
  "https://fcaidgnwugrftjdmjuun.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_SVLMviqrx2hZuAOPK14fNQ_1nByn75J";


const supabase =
  createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );


/* =========================================================
   STATES
   ========================================================= */

const states = [

  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"

];


/* =========================================================
   DISTRICT DATA
   ========================================================= */

const districtData = {

  "Jharkhand": [

    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum"

  ],


  "Bihar": [

    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"

  ],


  "Uttar Pradesh": [

    "Agra",
    "Aligarh",
    "Ayodhya",
    "Azamgarh",
    "Bareilly",
    "Badaun",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kushinagar",
    "Lakhimpur Kheri",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shrawasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi"

  ],


  "Maharashtra": [

    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"

  ]

};


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (id) =>
  document.getElementById(id);


function setText(id, value) {

  const el = $(id);

  if (el) {
    el.textContent = value;
  }

}


function show(
  id,
  display = "block"
) {

  const el = $(id);

  if (el) {
    el.style.display = display;
  }

}


function hide(id) {

  const el = $(id);

  if (el) {
    el.style.display = "none";
  }

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }


  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   COMPLAINT ID
   ========================================================= */

function createID() {

  const date =
    new Date()

      .toISOString()

      .slice(
        0,
        10
      )

      .replace(
        /-/g,
        ""
      );


  const random =
    Math.random()

      .toString(36)

      .slice(
        2,
        8
      )

      .toUpperCase();


  return `LS${date}${random}`;

}


/* =========================================================
   POPULATE STATES
   ========================================================= */

function populateStates() {

  const stateEl =
    $("state");


  if (!stateEl) {
    return;
  }


  if (
    stateEl.options.length <= 1
  ) {

    states.forEach(
      state => {

        const option =
          document.createElement(
            "option"
          );


        option.value =
          state;


        option.textContent =
          state;


        stateEl.appendChild(
          option
        );

      }
    );

  }

}


/* =========================================================
   POPULATE DISTRICTS
   ========================================================= */

function populateDistricts() {

  const stateEl =
    $("state");

  const districtEl =
    $("district");


  if (
    !stateEl ||
    !districtEl
  ) {

    return;

  }


  districtEl.innerHTML =
    '<option value="">जिला चुनें</option>';


  const districts =
    districtData[
      stateEl.value
    ] || [];


  districts.forEach(
    district => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        district;


      option.textContent =
        district;


      districtEl.appendChild(
        option
      );

    }
  );

}


/* =========================================================
   STATE + DISTRICT SETUP
   ========================================================= */

function setupStateDistrict() {

  const stateEl =
    $("state");


  if (!stateEl) {
    return;
  }


  populateStates();


  stateEl.addEventListener(
    "change",
    populateDistricts
  );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function menu() {

  const links =
    $("links");


  if (links) {

    links.classList.toggle(
      "show"
    );

  }

}


/* =========================================================
   OPEN COMPLAINT
   ========================================================= */

function openComplaint() {

  const section =
    $("complaintSection");


  if (section) {

    section.style.display =
      "block";


    section.scrollIntoView({

      behavior:
        "smooth",

      block:
        "start"

    });


    return;

  }


  const form =
    $("form");


  if (form) {

    form.scrollIntoView({

      behavior:
        "smooth",

      block:
        "start"

    });

  }

}


/* =========================================================
   TRACK SECTION
   ========================================================= */

function track() {

  const section =
    $("trackSection");


  if (section) {

    section.style.display =
      "block";


    section.scrollIntoView({

      behavior:
        "smooth",

      block:
        "start"

    });


    setTimeout(
      () => {

        const input =
          $("quickTrack");


        if (input) {
          input.focus();
        }

      },
      450
    );

  }

}


/* =========================================================
   CATEGORY SELECT
   ========================================================= */

function choose(category) {

  const categoryEl =
    $("category");


  if (categoryEl) {

    categoryEl.value =
      category;


    categoryEl.dispatchEvent(

      new Event(
        "change",
        {
          bubbles: true
        }
      )

    );

  }


  openComplaint();

}


/* =========================================================
   IMAGE COMPRESSION
   ========================================================= */

async function compressImage(file) {

  if (!file) {
    return "";
  }


  return new Promise(
    (resolve, reject) => {

      const reader =
        new FileReader();


      reader.onload = () => {

        const img =
          new Image();


        img.onload = () => {

          const maxSize =
            700;


          const largestSide =
            Math.max(
              img.width,
              img.height
            );


          const scale =
            Math.min(
              1,
              maxSize /
                largestSide
            );


          const canvas =
            document.createElement(
              "canvas"
            );


          canvas.width =
            Math.max(
              1,
              Math.round(
                img.width *
                scale
              )
            );


          canvas.height =
            Math.max(
              1,
              Math.round(
                img.height *
                scale
              )
            );


          const ctx =
            canvas.getContext(
              "2d"
            );


          if (!ctx) {

            reject(
              new Error(
                "Image canvas उपलब्ध नहीं है।"
              )
            );

            return;

          }


          ctx.drawImage(

            img,

            0,
            0,

            canvas.width,
            canvas.height

          );


          resolve(

            canvas.toDataURL(

              "image/jpeg",

              0.55

            )

          );

        };


        img.onerror = () => {

          reject(
            new Error(
              "Photo पढ़ी नहीं जा सकी।"
            )
          );

        };


        img.src =
          reader.result;

      };


      reader.onerror = () => {

        reject(
          new Error(
            "Photo पढ़ने में समस्या हुई।"
          )
        );

      };


      reader.readAsDataURL(
        file
      );

    }
  );

}


/* =========================================================
   PINCODE LOOKUP
   ========================================================= */

function setupPincodeLookup() {

  const pinEl =
    $("pincode");


  if (!pinEl) {
    return;
  }


  pinEl.addEventListener(
    "input",
    async event => {

      const pin =
        event.target.value

          .replace(
            /\D/g,
            ""
          )

          .slice(
            0,
            6
          );


      event.target.value =
        pin;


      const status =
        $("pinStatus");


      if (
        pin.length !== 6
      ) {

        if (status) {
          status.textContent =
            "";
        }

        return;

      }


      if (status) {

        status.textContent =
          "PIN जानकारी खोज रहे हैं…";

      }


      try {

        const response =
          await fetch(

            `https://api.postalpincode.in/pincode/${pin}`

          );


        if (!response.ok) {

          throw new Error(
            `PIN API HTTP ${response.status}`
          );

        }


        const result =
          await response.json();


        const postOffice =
          result?.[0]?.PostOffice?.[0];


        if (!postOffice) {

          if (status) {

            status.textContent =
              "PIN नहीं मिला";

          }

          return;

        }


        const stateEl =
          $("state");


        const districtEl =
          $("district");


        if (

          stateEl &&

          states.includes(
            postOffice.State
          )

        ) {

          stateEl.value =
            postOffice.State;


          populateDistricts();

        }


        if (districtEl) {

          const districtName =
            String(
              postOffice.District ||
              ""
            )

              .trim()

              .toLowerCase();


          const option =
            [
              ...districtEl.options
            ].find(

              option =>
                option.value
                  .trim()
                  .toLowerCase() ===
                districtName

            );


          if (option) {

            districtEl.value =
              option.value;

          }

        }


        if (status) {

          status.textContent =
            `${postOffice.District}, ${postOffice.State}`;

        }


      } catch (error) {

        console.error(
          "PIN Lookup Error:",
          error
        );


        if (status) {

          status.textContent =
            "PIN lookup उपलब्ध नहीं है";

        }

      }

    }
  );

}
/* =========================================================
   LOK SATHI — SUPABASE SCRIPT.JS
   PART 2
   ========================================================= */


/* =========================================================
   COMPLAINT FORM DATA
   ========================================================= */

function getComplaintFormData() {

  const mobile =
    $("mobile")?.value.trim() || "";

  if (!/^\d{10}$/.test(mobile)) {

    throw new Error(
      "कृपया 10 अंकों का मोबाइल नंबर डालें।"
    );

  }

  return {

    name:
      $("name")?.value.trim() || "",

    mobile,

    category:
      $("category")?.value || "",

    state:
      $("state")?.value || "",

    district:
      $("district")?.value || "",

    pincode:
      $("pincode")?.value.trim() || "",

    location:
      $("location")?.value.trim() || "",

    description:
      $("description")?.value.trim() || ""

  };

}


/* =========================================================
   SUBMIT COMPLAINT — SUPABASE
   ========================================================= */

async function submitComplaint(event) {

  event.preventDefault();

  const form =
    event.currentTarget;

  const button =
    $("submitBtn");


  if (button) {

    button.disabled =
      true;

    button.textContent =
      "⏳ सेव हो रहा है…";

  }


  try {

    const formData =
      getComplaintFormData();


    /* -----------------------------------------
       CREATE COMPLAINT ID
       ----------------------------------------- */

    const id =
      createID();


    /* -----------------------------------------
       GET PHOTO
       ----------------------------------------- */

    const photoInput =
      $("photo");


    const photoFile =
      photoInput?.files?.[0] ||
      null;


    const photo =
      await compressImage(
        photoFile
      );


    /* -----------------------------------------
       COMPLAINT OBJECT
       ----------------------------------------- */

    const complaintData = {
  complaintID: complaintID,
  name: formData.name,
  mobile: formData.mobile,
  category: formData.category,
  state: formData.state,
  district: formData.district,
  pincode: formData.pincode,
  location: formData.location,
  description: formData.description,
  status: "Pending",
  reach: formData.reach,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};


    /* -----------------------------------------
       SAVE TO SUPABASE
       ----------------------------------------- */

    const {
      data,
      error
    } = await supabase

      .from("Complaints")

      .insert([
        complaintData
      ])

      .select()
      .single();


    /* -----------------------------------------
       CHECK ERROR
       ----------------------------------------- */

    if (error) {

      console.error(
        "Supabase Insert Error:",
        error
      );


      throw new Error(

        error.message ||

        "Supabase में शिकायत सेव नहीं हो सकी।"

      );

    }


    console.log(
      "Complaint saved successfully:",
      data
    );


    /* -----------------------------------------
       SHOW COMPLAINT ID
       ----------------------------------------- */

    setText(
      "complaintID",
      id
    );


    show(
      "success"
    );


    $("success")?.scrollIntoView({

      behavior:
        "smooth",

      block:
        "center"

    });


    /* -----------------------------------------
       RESET FORM
       ----------------------------------------- */

    form.reset();


    const pinStatus =
      $("pinStatus");


    if (pinStatus) {

      pinStatus.textContent =
        "";

    }


    /* -----------------------------------------
       REFRESH STATS
       ----------------------------------------- */

    try {

      await loadStats();

    } catch (statsError) {

      console.error(
        "Stats refresh error:",
        statsError
      );

    }


    /* -----------------------------------------
       SUCCESS ALERT
       ----------------------------------------- */

    alert(

      "✅ शिकायत Lok Sathi में सुरक्षित हो गई।\n\n" +

      "Complaint ID: " +

      id

    );


  } catch (error) {

    console.error(
      "Submit Error:",
      error
    );


    alert(

      "❌ शिकायत सेव नहीं हुई।\n\n" +

      (
        error?.message ||

        "Supabase में save करने में समस्या हुई।"
      )

    );


  } finally {

    if (button) {

      button.disabled =
        false;

      button.textContent =
        "🚀 शिकायत सबमिट करें";

    }

  }

}


/* =========================================================
   COMPLAINT FORM SETUP
   ========================================================= */

function setupComplaintForm() {

  const form =
    $("form");


  if (!form) {
    return;
  }


  form.addEventListener(
    "submit",
    submitComplaint
  );

}


/* =========================================================
   TRACK MESSAGE
   ========================================================= */

function renderTrackMessage(

  message,

  type = "info"

) {

  const result =
    $("trackResult");


  if (!result) {
    return;
  }


  result.innerHTML = `

    <div class="track-message ${type}">

      ${escapeHTML(message)}

    </div>

  `;

}


/* =========================================================
   GET TRACK STATUS FROM SUPABASE
   ========================================================= */

async function getTrackStatusData(id) {

  const cleanID =
    String(id || "")
      .trim()
      .toUpperCase();


  if (!cleanID) {

    throw new Error(
      "Complaint ID खाली है।"
    );

  }


  const {
    data,
    error
  } = await supabase

    .from("Complaints")

.select(`
  complaintID,
  name,
  category,
  state,
  District,
  Pincode,
  Status,
  Reach,
  adminReply,
  createdAt,
  updatedAt
`)

    .eq(
      "complaintID",
      cleanID
    )

    .maybeSingle();


  /* -----------------------------------------
     SUPABASE ERROR
     ----------------------------------------- */

  if (error) {

    console.error(
      "Tracking Supabase Error:",
      error
    );


    throw new Error(

      error.message ||

      "Complaint खोजने में समस्या हुई।"

    );

  }


  /* -----------------------------------------
     COMPLAINT NOT FOUND
     ----------------------------------------- */

  if (!data) {

    return null;

  }


  /* -----------------------------------------
     RETURN DATA
     ----------------------------------------- */

  return {

    id:
      data.complaintID,

    name:
      data.name,

    category:
      data.category,

    state:
      data.state,

    district:
      data.district,

    pincode:
      data.pincode,

    status:
      data.status,

    reach:
      data.reach,

    adminReply:
      data.adminReply,

    createdAt:
      data.createdAt,

    updatedAt:
      data.updatedAt

  };

}


/* =========================================================
   FORMAT TIMESTAMP
   ========================================================= */

function formatTimestamp(value) {

  if (!value) {

    return "अभी उपलब्ध नहीं";

  }


  try {

    const date =
      new Date(value);


    if (
      Number.isNaN(
        date.getTime()
      )
    ) {

      return String(value);

    }


    return date.toLocaleString(

      "hi-IN",

      {

        dateStyle:
          "medium",

        timeStyle:
          "short"

      }

    );


  } catch (error) {

    console.error(
      "Timestamp Error:",
      error
    );


    return "अभी उपलब्ध नहीं";

  }

}


/* =========================================================
   RENDER TRACK RESULT
   ========================================================= */

function renderTrackResult(data) {

  const result =
    $("trackResult");


  if (!result) {
    return;
  }


  const status =
    data.status ||
    "Pending";


  const statusClass = {

    "Pending":
      "pending",

    "In Progress":
      "progress",

    "Solved":
      "solved"

  }[status] || "pending";


  const statusMessage = {

    "Pending":
      "शिकायत प्राप्त हो गई है",

    "In Progress":
      "शिकायत पर कार्यवाही चल रही है",

    "Solved":
      "शिकायत का समाधान कर दिया गया है"

  }[status] || status;


  result.innerHTML = `

    <div class="ls-track-card">


      <div class="ls-track-top">


        <div class="ls-track-id-box">

          <span>
            Complaint ID
          </span>

          <strong>
            ${escapeHTML(data.id)}
          </strong>

        </div>


        <span
          class="ls-track-status ${statusClass}"
        >

          ${escapeHTML(status)}

        </span>


      </div>


      <div class="ls-track-success">


        <div class="ls-track-check">
          ✓
        </div>


        <div>

          <h3>
            ${escapeHTML(statusMessage)}
          </h3>


          <p>
            आपकी शिकायत Lok Sathi सिस्टम में दर्ज है।
          </p>

        </div>


      </div>


      <div class="ls-track-details">


        <div class="ls-detail-item">

          <span>
            श्रेणी
          </span>

          <strong>
            ${escapeHTML(
              data.category || "—"
            )}
          </strong>

        </div>


        <div class="ls-detail-item">

          <span>
            राज्य
          </span>

          <strong>
            ${escapeHTML(
              data.state || "—"
            )}
          </strong>

        </div>


        <div class="ls-detail-item">

          <span>
            जिला
          </span>

          <strong>
            ${escapeHTML(
              data.district || "—"
            )}
          </strong>

        </div>


        <div class="ls-detail-item">

          <span>
            PIN Code
          </span>

          <strong>
            ${escapeHTML(
              data.pincode || "—"
            )}
          </strong>

        </div>


        <div class="ls-detail-item">

          <span>
            विभाग / स्तर
          </span>

          <strong>
            ${escapeHTML(
              data.reach || "Received"
            )}
          </strong>

        </div>


        <div class="ls-detail-item">

          <span>
            शिकायत दर्ज
          </span>

          <strong>
            ${escapeHTML(
              formatTimestamp(
                data.createdAt
              )
            )}
          </strong>

        </div>


      </div>


      ${
        data.adminReply

          ? `

            <div class="ls-admin-reply">

              <div class="ls-reply-title">

                <span>
                  ✉
                </span>

                अधिकारी का जवाब

              </div>


              <p>

                ${escapeHTML(
                  data.adminReply
                )}

              </p>

            </div>

          `

          : ""

      }


      <div class="ls-last-update">

        <span>
          अंतिम अपडेट
        </span>


        <strong>

          ${escapeHTML(
            formatTimestamp(
              data.updatedAt
            )
          )}

        </strong>

      </div>


    </div>

  `;

}


/* =========================================================
   QUICK TRACK
   ========================================================= */

async function quickTrack() {

  const input =
    $("quickTrack");


  const id =
    input?.value.trim() || "";


  if (!id) {

    renderTrackMessage(

      "कृपया Complaint ID डालें।",

      "error"

    );

    return;

  }


  renderTrackMessage(

    "शिकायत की जानकारी खोजी जा रही है…",

    "info"

  );


  try {

    const data =
      await getTrackStatusData(id);


    if (!data) {

      renderTrackMessage(

        "यह Complaint ID नहीं मिली। कृपया ID दोबारा जांचें।",

        "error"

      );

      return;

    }


    renderTrackResult(
      data
    );


  } catch (error) {

    console.error(
      "Tracking Error:",
      error
    );


    renderTrackMessage(

      "Tracking में समस्या हुई। कृपया Internet और Supabase Rules जांचें।",

      "error"

    );

  }

}


/* =========================================================
   COPY COMPLAINT ID
   ========================================================= */

function copyComplaintID() {

  const id =
    $("complaintID")
      ?.textContent
      .trim();


  if (!id) {
    return;
  }


  navigator.clipboard

    .writeText(id)

    .then(() => {

      alert(
        "✅ Complaint ID कॉपी हो गई।"
      );

    })

    .catch(() => {

      alert(
        "Complaint ID कॉपी नहीं हो सकी।"
      );

    });

}
/* =========================================================
   LOK SATHI — SUPABASE SCRIPT.JS
   PART 3
   ========================================================= */


/* =========================================================
   LOAD PUBLIC STATS
   ========================================================= */

async function loadStats() {

  try {

    const {
      data,
      error
    } = await supabase

      .from("Complaints")

      .select(
        "status"
      );


    if (error) {

      console.error(
        "Stats Supabase Error:",
        error
      );

      throw error;

    }


    let total =
      data?.length || 0;

    let solved =
      0;

    let pending =
      0;


    (data || []).forEach(
      complaint => {

        if (
          complaint.status ===
          "Solved"
        ) {

          solved++;

        }


        if (

          complaint.status ===
            "Pending" ||

          complaint.status ===
            "In Progress"

        ) {

          pending++;

        }

      }
    );


    setText(
      "total",
      total
    );


    setText(
      "solved",
      solved
    );


    setText(
      "pending",
      pending
    );


  } catch (error) {

    console.error(
      "Stats Error:",
      error
    );


    setText(
      "total",
      "—"
    );


    setText(
      "solved",
      "—"
    );


    setText(
      "pending",
      "—"
    );

  }

}


/* =========================================================
   INITIALIZE LOK SATHI
   ========================================================= */

function initializeLokSathi() {

  setupStateDistrict();

  setupPincodeLookup();

  setupComplaintForm();

  loadStats();

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeLokSathi
  );

} else {

  initializeLokSathi();

}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.menu =
  menu;


window.openComplaint =
  openComplaint;


window.track =
  track;


window.choose =
  choose;


window.quickTrack =
  quickTrack;


window.copyComplaintID =
  copyComplaintID;


/* =========================================================
   LOK SATHI HEADING
   ========================================================= */

function makeLokSathiHeadingBig() {

  const elements =
    document.querySelectorAll(
      "h1,h2,h3,h4,h5,h6,span,div,p,a"
    );


  elements.forEach(
    el => {

      const text =
        el.textContent.trim();


      if (
        text ===
        "लोक साथी"
      ) {

        el.style.fontSize =
          "clamp(38px, 9vw, 62px)";


        el.style.fontWeight =
          "900";


        el.style.lineHeight =
          "1";


        el.style.color =
          "#087f4d";


        el.style.letterSpacing =
          "-1px";


        el.style.whiteSpace =
          "nowrap";


        el.style.display =
          "inline-block";


        el.style.textShadow =
          "0 3px 10px rgba(8,127,77,.15)";

      }

    }
  );

}


/* =========================================================
   HEADING READY
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    makeLokSathiHeadingBig
  );

} else {

  makeLokSathiHeadingBig();

}


/* =========================================================
   TOP BRAND FIX
   ========================================================= */

function fixLokSathiTopBrand() {

  const textElements =
    [
      ...document.querySelectorAll("*")
    ].filter(
      el => {

        return (
          el.children.length === 0 &&
          el.textContent.trim() ===
            "लोक साथी"
        );

      }
    );


  textElements.forEach(
    textEl => {

      let container =
        textEl.parentElement;


      while (
        container &&
        container !==
          document.body
      ) {

        const logo =
          container.querySelector(
            "img"
          );


        if (logo) {

          container.style.display =
            "flex";


          container.style.flexDirection =
            "row";


          container.style.alignItems =
            "center";


          container.style.justifyContent =
            "flex-start";


          container.style.gap =
            "18px";


          textEl.style.display =
            "block";


          textEl.style.fontSize =
            "clamp(38px, 9vw, 58px)";


          textEl.style.fontWeight =
            "900";


          textEl.style.lineHeight =
            "1";


          textEl.style.margin =
            "0";


          textEl.style.padding =
            "0";


          textEl.style.whiteSpace =
            "nowrap";


          textEl.style.color =
            "#087f4d";


          textEl.style.position =
            "static";


          textEl.style.transform =
            "none";


          logo.style.flexShrink =
            "0";


          break;

        }


        container =
          container.parentElement;

      }

    }
  );

}


/* =========================================================
   TOP BRAND READY
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      setTimeout(
        fixLokSathiTopBrand,
        100
      );

    }
  );

} else {

  setTimeout(
    fixLokSathiTopBrand,
    100
  );

}


/* =========================================================
   FORM ICONS
   ========================================================= */

function addLokSathiFormIcons() {

  const iconMap = {

    "नाम":
      "👤",

    "मोबाइल नंबर":
      "📱",

    "समस्या":
      "⚠️",

    "PIN Code":
      "📍",

    "राज्य":
      "🏛️",

    "जिला":
      "🗺️",

    "पूरा स्थान / पता":
      "🏠",

    "समस्या का विवरण":
      "📝",

    "समस्या की फोटो":
      "📷",

    "फोटो":
      "📷"

  };


  document
    .querySelectorAll("label")
    .forEach(
      label => {

        if (
          label.dataset
            .lokSathiIcon ===
          "yes"
        ) {

          return;

        }


        const labelText =
          label.textContent

            .replace(
              /\s+/g,
              " "
            )

            .trim();


        let selectedIcon =
          "";


        for (
          const key in iconMap
        ) {

          if (
            labelText.includes(
              key
            )
          ) {

            selectedIcon =
              iconMap[key];

            break;

          }

        }


        if (!selectedIcon) {
          return;
        }


        label.dataset
          .lokSathiIcon =
          "yes";


        const icon =
          document.createElement(
            "span"
          );


        icon.textContent =
          selectedIcon;


        icon.style.cssText = `

          display:inline-flex;

          align-items:center;

          justify-content:center;

          width:28px;

          height:28px;

          margin-right:8px;

          font-size:19px;

          vertical-align:-4px;

          line-height:1;

        `;


        label.insertBefore(
          icon,
          label.firstChild
        );

      }
    );

}


/* =========================================================
   START FORM ICONS
   ========================================================= */

function startLokSathiFormIcons() {

  setTimeout(
    addLokSathiFormIcons,
    300
  );

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startLokSathiFormIcons
  );

} else {

  startLokSathiFormIcons();

}