// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var targetId = this.getAttribute("href").substring(1);
    var target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---- DYNAMIC OLDER BLOG POSTS & UPDATES ---- //

document.addEventListener("DOMContentLoaded", function () {
  // ---------------- BLOG PAGE ---------------- //
  const olderBlogPosts = [
    {
      title: "📋 Early Seat Map Sketches",
      body:
        "First draft versions of the SeatMaster layout, including rough booth, indoor, and patio sections built in Code.org.",
      note: "Archived: October 2025"
    },
    {
      title: "🧪 List Mode Prototype",
      body:
        "Tested an early version of List Mode showing tables, seats, and status in one long list before the current design.",
      note: "Archived: November 2025"
    }
    // Add more objects here if you want more past blog posts
  ];

  const showOlderBlogsBtn = document.getElementById("show-older-blogs");
  const olderBlogsContainer = document.getElementById("older-blogs");

  if (showOlderBlogsBtn && olderBlogsContainer) {
    showOlderBlogsBtn.addEventListener("click", function () {
      // Clear in case it's reused (not really needed if we hide the button)
      olderBlogsContainer.innerHTML = "";

      olderBlogPosts.forEach(function (post) {
        const card = document.createElement("div");
        card.className = "card";

        const h3 = document.createElement("h3");
        h3.textContent = post.title;

        const pBody = document.createElement("p");
        pBody.textContent = post.body;

        const pNote = document.createElement("p");
        pNote.className = "note";
        pNote.textContent = post.note;

        card.appendChild(h3);
        card.appendChild(pBody);
        card.appendChild(pNote);

        olderBlogsContainer.appendChild(card);
      });

      // Hide the button after loading to prevent duplicates
      showOlderBlogsBtn.style.display = "none";
    });
  }

  // ---------------- UPDATES PAGE ---------------- //
  const olderUpdates = [
    {
      title: "v0.3 – Basic Color Tests",
      items: [
        "Experimented with green/red table colors for open vs occupied.",
        "Tested how colors looked on dark vs light backgrounds.",
        "Decided to stick with a dark theme for better contrast."
      ],
      note: "Archived pre-release build"
    },
    {
      title: "v0.5 – Manual Seat Counting",
      items: [
        "Added rough seat counts for each table.",
        "Counters were manually updated before automation.",
        "Helped plan the final automatic counter system."
      ],
      note: "Stepping stone towards v1.0"
    }
    // Add more objects here if you want more past updates
  ];

  const showOlderUpdatesBtn = document.getElementById("show-older-updates");
  const olderUpdatesContainer = document.getElementById("older-updates");

  if (showOlderUpdatesBtn && olderUpdatesContainer) {
    showOlderUpdatesBtn.addEventListener("click", function () {
      olderUpdatesContainer.innerHTML = "";

      olderUpdates.forEach(function (update) {
        const card = document.createElement("div");
        card.className = "card";

        const h3 = document.createElement("h3");
        h3.textContent = update.title;

        const pIntro = document.createElement("p");
        pIntro.textContent = "Older milestone notes:";

        const ul = document.createElement("ul");
        update.items.forEach(function (item) {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });

        const pNote = document.createElement("p");
        pNote.className = "note";
        pNote.textContent = update.note;

        card.appendChild(h3);
        card.appendChild(pIntro);
        card.appendChild(ul);
        card.appendChild(pNote);

        olderUpdatesContainer.appendChild(card);
      });

      showOlderUpdatesBtn.style.display = "none";
    });
  }
});
