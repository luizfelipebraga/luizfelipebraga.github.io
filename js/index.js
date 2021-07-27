const skillSection = document.getElementById('skills');

const progressBar = document.querySelectorAll('.progress-line')


function showProgress() {
    skillSection.style.opacity = 1;
    skillSection.style.transition = opacity; 1;

    progressBar.forEach(progress => {
        progress.style.opacity = 1;
        progress.style.with = 1;
    })
}

function hideProgress() {
    skillSection.style.opacity = 0;
    // progressBar.forEach(progress => {
    //     progress.style.opacity = 0;
    //     progress.style.with = 0;
    // })
}

window.addEventListener('scroll', () => {

    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos) {
        showProgress();
    }else {
        hideProgress();
    }
})