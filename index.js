const skillSection = document.getElementById('skills');

const progressBar = document.querySelectorAll('progress-line')


function showProgress() {
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}`;
    });
}

function hideProgress() {
    progressBar.forEach(progressBar => { 
        progressBar.style.opacity = 0;
        progressBar.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    skillSection.getBoundingClientRect() === null ? null : skillSection.getBoundingClientRect()
    const sectionPos = skillSection.getBoundingClientRect().top;
    sectionPos !== null? sectionPos : null;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos) {
        showProgress();
    }else {
        hideProgress();
    }
})