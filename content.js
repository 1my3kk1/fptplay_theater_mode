function removeAgeRestriction() {
    const el = document.querySelector('[aria-label="Giới hạn độ tuổi"]');
    if (el) el.remove();
}

function removeInfoVideoClass() {
    document.querySelectorAll('[class*="InforVideoComponent"]').forEach(el => el.remove());
}

function fixGridLayout() {
    document.querySelectorAll('[class*="grid-cols-\\[1fr_432px\\]"]').forEach(el => {
        el.classList.remove('xl:grid-cols-[1fr_432px]', 'w2k:grid-cols-[calc(1548/2280*100%)_calc(732/2280*100%)]');
        el.classList.add('grid-cols-1');
    });
}

function fixEpisodeListWidth() {
    document.querySelectorAll('[class*="ListEspisodeComponent"][class*="w-\\[416px\\]"]').forEach(el => {
        el.classList.remove('w-[416px]');
        el.classList.add('w-full');
    });
}

removeAgeRestriction();
removeInfoVideoClass();
fixGridLayout();
fixEpisodeListWidth();

const observer = new MutationObserver(() => {
    removeAgeRestriction();
    removeInfoVideoClass();
    fixGridLayout();
    fixEpisodeListWidth();
});
observer.observe(document.body, { childList: true, subtree: true });
