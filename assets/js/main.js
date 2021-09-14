"use strict";

$(document).ready(function () {
  // loader Ends

  // Admission notice Table

  $("#admission__notice__table").DataTable({
    scrollX: true,
  });

  //Result Table

  $("#result__notice__table").DataTable({
    scrollX: true,
  });

  // document ready Ends
});

// Check Internet Connection
window.addEventListener("offline", function (e) {
  swal({
    title: "Offline",
    text: "You are not conneted to internet..!",
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickOutside: false,
  });
});

window.addEventListener("online", function (e) {
  swal({
    title: "Back online",
    text: "Connecting please wait....!",
    showCancelButton: false,
    showConfirmButton: false,
    closeOnClickOutside: false,
  });
  location.reload();
});
// Check Internet Connection

// Fixed Navbar Ends

window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");
  if (loader) {
    let mainBody = document.querySelector(".main__container");
    loader.style.display = "none";
    mainBody.classList.remove("d-none");
  }
  // Intilizing AOS
  //   AOS.init({
  //     duration: 800,
  //   });

  // Intilizing AOS

  //   console.clear();

  // Get Client IP Address

  //   $.get(
  //     "https://ipinfo.io",
  //     function (response) {
  //       let ip_address = response.ip;
  //       $.ajax({
  //         type: "POST",
  //         url: base_url + "Website/save_information",
  //         data: {
  //           csrf_test_name: csrf_hash,
  //           ip_address: ip_address,
  //         },
  //         success: function (response) {
  //           var data = JSON.parse(response);
  //           let total_visit = String(data).padStart(6, "0");
  //           let html = "";
  //           for (let i = 0; i < total_visit.length; i++) {
  //             html += " <li>" + total_visit[i] + "</span>";
  //           }
  //           $(".my-visitor-span").html(html);
  //         },
  //       });
  //     },
  //     "json"
  //   );

  // Get Client IP Address Ends
});

//ON Load js Ends
