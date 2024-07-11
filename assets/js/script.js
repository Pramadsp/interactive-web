const answers = {};
function answer(currentTabIndex, value = null) {
    if (value !== null) {
        answers[`tabindex-${currentTabIndex}`] = value;
        console.log(`Answer for tabindex-${currentTabIndex}: ${value}`);
    }

    const currentTab = document.getElementById(`tabindex-${currentTabIndex}`);
    const nextTab = document.getElementById(`tabindex-${currentTabIndex + 1}`);

    if (nextTab) {
        currentTab.classList.add('hidden');
        nextTab.classList.remove('hidden');

        if(nextTab === document.getElementById(`tabindex-4`)){
            document.getElementById(`landing-page`).classList.add('hidden')
        }
    } else {
        alert('End of tabs');
        console.log('Collected answers:', answers);
    }
}