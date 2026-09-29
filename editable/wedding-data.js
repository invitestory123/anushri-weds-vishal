/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Edit this file to update couple names, bios, wedding dates, times, venue details, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      name: "Vishal",
      fullName: "Vishal Parmar",
      line: "Son of Mr. Pravinbhai T. Parmar & Mrs. Naynaben P. Parmar",
      note: "B/30, Vaishnav Kutir, Opp. M. M. Vora Showroom, Somatalav, Dhabhoi Road, Vadodara - 390025",
      photo: "./editable/assets/groom.png",
    },
    bride: {
      name: "Anusri",
      fullName: "Dr. Anusri Manoj",
      line: "Daughter of Mr. Manoj Manherikkandy Puthiyandi & Mrs. Jessy Arippa Madankara",
      note: "'Thryambakam', Near Rashtra Mandir, John Mill Road, P. O. Civil Station, Kannur, Kerala - 670002 • Ph: 8921400970",
      photo: "./editable/assets/bride.png",
    },
  },

  wedding: {
    dateISO: "2026-12-20T10:30:00+05:30",
    endISO: "2026-12-20T13:30:00+05:30",
    dateLabel: "Sunday, 20 December 2026",
    dateShort: "20 · 12 · 2026",
    timeLabel: "10:30 AM – 11:30 AM",
    muhurthamLabel: "Muhurtham · 10:30 AM – 11:30 AM",
    footerDateLocation: "20 · 12 · 2026 · Eachur, Kannur",
    sangeeth: {
      title: "Sangeeth Night",
      venue: "Arabian Beach Resort",
      time: "From 5:00 PM onwards",
    },
  },

  venue: {
    name: "CR Auditorium, Eachur",
    address: "CR Auditorium, Eachur, Kannur, Kerala - 670591",
    locationShort: "Eachur, Kannur",
    mapsUrl: "https://share.google/PCLpVzqm5MXZN5yz4",
  },

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
  },
};

