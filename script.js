// DOM 콘텐츠가 모두 로드된 후에 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {

    // 모든 콘텐츠 섹션과 버튼들을 선택합니다.
    const contentSections = document.querySelectorAll('.content-section');
    const buildingButtons = document.querySelectorAll('.building-button');
    const backButton = document.getElementById('back-button');
    const buildingSelectionScreen = document.getElementById('building-selection');

    // 화면을 전환하는 함수
    const switchScreen = (targetId) => {
        // 1. 모든 섹션에서 'active' 클래스를 제거하여 숨깁니다.
        contentSections.forEach(section => section.classList.remove('active'));

        // 2. 목표 ID를 가진 섹션을 찾아 'active' 클래스를 추가하여 화면에 표시합니다.
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    };

    // 각 건물 버튼에 클릭 이벤트 리스너를 추가합니다.
    buildingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (targetId) {
                switchScreen(targetId);
            }
        });
    });

    // '뒤로가기' 버튼에 클릭 이벤트 리스너를 추가합니다.
    backButton.addEventListener('click', () => {
        switchScreen('building-selection');
    });
});
