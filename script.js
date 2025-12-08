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

// ---- LOAD OLDER BLOG POSTS & UPDATES FROM JSON ---- //

document.addEventListener("DOMContentLoaded", function () {
  // ---------- BLOG PAGE: older posts ---------- //
  const showOlderBlogsBtn = document.getElementById("show-older-blogs");
  const olderBlogsContainer = document.getElementById("older-blogs");

  if (showOlderBlogsBtn && olderBlogsContainer) {
    showOlderBlogsBtn.addEventListener("click", async function () {
      try {
        const response = await fetch("older-blogs.json");
        if (!response.ok) {
          throw new Error("Failed to load older-blogs.json");
        }

        const data = await response.json();
        const posts = data.posts || [];

        // Clear container in case of re-use
        olderBlogsContainer.innerHTML = "";

        posts.forEach(function (post) {
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

        // Hide button after loading so it doesn't re-load
        showOlderBlogsBtn.style.display = "none";
      } catch (err) {
        console.error(err);
        // Simple error message for users
        olderBlogsContainer.innerHTML =
          '<p class="note">Could not load older blog posts right now.</p>';
      }
    });
  }

  // ---------- UPDATES PAGE: older updates ---------- //
  const showOlderUpdatesBtn = document.getElementById("show-older-updates");
  const olderUpdatesContainer = document.getElementById("older-updates");

  if (showOlderUpdatesBtn && olderUpdatesContainer) {
    showOlderUpdatesBtn.addEventListener("click", async function () {
      try {
        const response = await fetch("older-updates.json");
        if (!response.ok) {
          throw new Error("Failed to load older-updates.json");
        }

        const data = await response.json();
        const updates = data.updates || [];

        // Clear container in case of re-use
        olderUpdatesContainer.innerHTML = "";

        updates.forEach(function (update) {
          const card = document.createElement("div");
          card.className = "card";

          const h3 = document.createElement("h3");
          h3.textContent = update.title;

          const pIntro = document.createElement("p");
          pIntro.textContent = "Older milestone notes:";

          const ul = document.createElement("ul");
          (update.items || []).forEach(function (item) {
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

        // Hide button after loading
        showOlderUpdatesBtn.style.display = "none";
      } catch (err) {
        console.error(err);
        olderUpdatesContainer.innerHTML =
          '<p class="note">Could not load older updates right now.</p>';
      }
    });
  }
});
