const skillSection = document.getElementById('skills');


function showProgress() {
    skillSection.style.opacity = 1;
    skillSection.style.transition = 1;
}

function hideProgress() {
    skillSection.style.opacity = 0;
    skillSection.style.transition = 0;
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