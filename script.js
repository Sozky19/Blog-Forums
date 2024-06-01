document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    logo.style.display = "block";

    const postForm = document.getElementById("postForm");
    const notesSection = document.getElementById("notes");

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const title = event.target.title.value;
        const content = event.target.content.value;
        const image = event.target.image.files[0];

        const note = document.createElement("div");
        note.classList.add("note");

        const noteTitle = document.createElement("h3");
        noteTitle.textContent = title;
        note.appendChild(noteTitle);

        const noteContent = document.createElement("p");
        noteContent.textContent = content;
        note.appendChild(noteContent);

        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = title;
                img.style.maxWidth = "100%";
                note.appendChild(img);
            };
            reader.readAsDataURL(image);
        }

        notesSection.appendChild(note);

        postForm.reset();
    });
});
