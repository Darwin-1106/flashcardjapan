// ═══════════════════════════════════════════════════════════════
//                    FLASHCARD APP LOGIC
// ═══════════════════════════════════════════════════════════════
// Quản lý state, navigation, và tương tác người dùng

// ───────────────────────────────────────────────────────────────
// STATE MANAGEMENT - Quản lý trạng thái ứng dụng
// ───────────────────────────────────────────────────────────────
let appState = {
    currentLevel: null,        // Level đang học: 'n5', 'n4', 'n3', 'school'
    currentLessonChunk: [],    // Mảng 20 từ của bài hiện tại
    currentIndex: 0,           // Vị trí từ hiện tại (0-19)
    isFlipped: false           // Trạng thái lật thẻ
};

// ───────────────────────────────────────────────────────────────
// DOM ELEMENTS - Lấy tham chiếu các phần tử HTML
// ───────────────────────────────────────────────────────────────
const screens = {
    home: document.getElementById('homeScreen'),
    lesson: document.getElementById('lessonScreen'),
    study: document.getElementById('studyScreen')
};

// ───────────────────────────────────────────────────────────────
// NAVIGATION FUNCTIONS - Điều hướng giữa các màn hình
// ───────────────────────────────────────────────────────────────

/**
 * Hiển thị màn hình được chọn, ẩn các màn hình khác
 * @param {string} screenName - Tên màn hình: 'home', 'lesson', 'study'
 */
function showScreen(screenName) {
    // Ẩn tất cả màn hình
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    
    // Hiện màn hình được chọn
    screens[screenName].classList.remove('hidden');
}

/**
 * Quay về màn hình Home
 */
function goHome() {
    appState.currentLevel = null;
    appState.currentLessonChunk = [];
    appState.currentIndex = 0;
    showScreen('home');
}

/**
 * Quay lại màn hình chọn bài học
 */
function goBackToLessons() {
    appState.currentLessonChunk = [];
    appState.currentIndex = 0;
    renderLessonScreen(appState.currentLevel);
    showScreen('lesson');
}

// ───────────────────────────────────────────────────────────────
// HOME SCREEN - Màn hình chọn cấp độ
// ───────────────────────────────────────────────────────────────

/**
 * Xử lý khi người dùng chọn level
 * @param {string} level - Cấp độ: 'n5', 'n4', 'n3', 'school'
 */
function selectLevel(level) {
    appState.currentLevel = level;
    renderLessonScreen(level);
    showScreen('lesson');
}

// ───────────────────────────────────────────────────────────────
// LESSON SCREEN - Màn hình chọn bài học
// ───────────────────────────────────────────────────────────────

/**
 * Render màn hình danh sách bài học
 * @param {string} level - Cấp độ đã chọn
 */
function renderLessonScreen(level) {
    const levelData = database[level];
    const totalWords = levelData.length;
    const wordsPerLesson = 20;
    const totalLessons = Math.ceil(totalWords / wordsPerLesson);

    // Cập nhật tiêu đề
    const levelNames = {
        'n5': 'N5 - Sơ Cấp',
        'n4': 'N4 - Trung Cấp Sơ',
        'n3': 'N3 - Trung Cấp',
        'school': 'Trên Trường'
    };

    document.getElementById('lessonTitle').textContent = levelNames[level];
    document.getElementById('lessonSubtitle').textContent = 
        `Tổng ${totalWords} từ - ${totalLessons} bài học`;

    // Tạo danh sách các bài học
    const lessonGrid = document.getElementById('lessonGrid');
    lessonGrid.innerHTML = ''; // Xóa nội dung cũ

    for (let i = 0; i < totalLessons; i++) {
        const startIndex = i * wordsPerLesson;
        const endIndex = Math.min(startIndex + wordsPerLesson, totalWords);
        const lessonNumber = i + 1;

        const lessonBtn = document.createElement('button');
        lessonBtn.className = 'lesson-btn';
        lessonBtn.innerHTML = `
            <h3>Bài ${lessonNumber}</h3>
            <p>Từ ${startIndex + 1} - ${endIndex}</p>
        `;

        // Xử lý khi click vào bài học
        lessonBtn.addEventListener('click', () => selectLesson(startIndex, endIndex));

        lessonGrid.appendChild(lessonBtn);
    }
}

/**
 * Xử lý khi chọn bài học cụ thể
 * @param {number} startIndex - Vị trí bắt đầu
 * @param {number} endIndex - Vị trí kết thúc
 */
function selectLesson(startIndex, endIndex) {
    const levelData = database[appState.currentLevel];
    appState.currentLessonChunk = levelData.slice(startIndex, endIndex);
    appState.currentIndex = 0;
    appState.isFlipped = false;
    
    renderStudyScreen();
    showScreen('study');
}

// ───────────────────────────────────────────────────────────────
// STUDY SCREEN - Màn hình học flashcard
// ───────────────────────────────────────────────────────────────

/**
 * Render màn hình học tập
 */
function renderStudyScreen() {
    const totalCards = appState.currentLessonChunk.length;
    const currentCard = appState.currentIndex + 1;

    // Cập nhật progress bar
    const progressPercentage = (currentCard / totalCards) * 100;
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').textContent = `${currentCard} / ${totalCards}`;

    // Lấy từ hiện tại
    const word = appState.currentLessonChunk[appState.currentIndex];

    // Cập nhật nội dung flashcard
    document.getElementById('cardKanji').textContent = word.kanji;
    document.getElementById('cardKana').textContent = word.kana;
    document.getElementById('cardMeaning').textContent = word.mean;
    document.getElementById('cardExample').textContent = word.example;

    // Reset trạng thái lật thẻ
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    appState.isFlipped = false;
}

/**
 * Xử lý lật thẻ khi click
 */
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    appState.isFlipped = !appState.isFlipped;
}

/**
 * Chuyển sang từ tiếp theo
 */
function nextCard() {
    const totalCards = appState.currentLessonChunk.length;
    
    // Kiểm tra xem đã học hết bài chưa
    if (appState.currentIndex < totalCards - 1) {
        appState.currentIndex++;
        renderStudyScreen();
    } else {
        // Đã hoàn thành bài học
        showCompletionScreen();
    }
}

/**
 * Xử lý khi click nút "Chưa thuộc"
 */
function markAsWrong() {
    // Logic: Có thể thêm tính năng lưu từ chưa thuộc vào danh sách ôn tập
    // Hiện tại chỉ chuyển sang từ tiếp theo
    nextCard();
}

/**
 * Xử lý khi click nút "Đã thuộc"
 */
function markAsCorrect() {
    // Logic: Có thể thêm tính năng tracking tiến độ
    // Hiện tại chỉ chuyển sang từ tiếp theo
    nextCard();
}

/**
 * Hiển thị màn hình hoàn thành bài học
 */
function showCompletionScreen() {
    const studyContainer = document.getElementById('studyContainer');
    
    studyContainer.innerHTML = `
        <div class="completion-card">
            <div class="emoji">🎉</div>
            <h2>おめでとう！</h2>
            <p>Bạn đã hoàn thành bài học này!</p>
            <button class="control-btn btn-correct" onclick="goBackToLessons()">
                Chọn Bài Khác
            </button>
            <br><br>
            <button class="back-btn" onclick="goHome()">
                ← Về Trang Chủ
            </button>
        </div>
    `;
}

// ───────────────────────────────────────────────────────────────
// INITIALIZATION - Khởi tạo khi trang load
// ───────────────────────────────────────────────────────────────

/**
 * Khởi tạo ứng dụng
 */
function initApp() {
    // Hiển thị số lượng từ ở từng level trên home screen
    const levelCounts = {
        'n5': database.n5.length,
        'n4': database.n4.length,
        'n3': database.n3.length,
        'school': database.school.length
    };

    // Cập nhật số từ vào các thẻ level
    document.querySelectorAll('.level-card').forEach(card => {
        const level = card.getAttribute('data-level');
        const countElement = card.querySelector('.word-count');
        if (countElement && levelCounts[level]) {
            countElement.textContent = `${levelCounts[level]} từ vựng`;
        }
    });

    // Hiển thị màn hình home
    showScreen('home');
}

// ───────────────────────────────────────────────────────────────
// EVENT LISTENERS - Gắn sự kiện
// ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    initApp();

    // Event cho flashcard click
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', flipCard);
    }
});

// ───────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS - Hàm tiện ích
// ───────────────────────────────────────────────────────────────

/**
 * Xáo trộn mảng (Fisher-Yates shuffle)
 * Có thể dùng để random thứ tự từ trong tương lai
 * @param {Array} array - Mảng cần xáo trộn
 * @returns {Array} Mảng đã xáo trộn
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Lưu tiến độ học vào localStorage (Tính năng mở rộng)
 * Có thể implement trong tương lai
 */
function saveProgress() {
    const progress = {
        level: appState.currentLevel,
        completedWords: appState.currentIndex,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('flashcard_progress', JSON.stringify(progress));
}

/**
 * Tải tiến độ học từ localStorage (Tính năng mở rộng)
 * Có thể implement trong tương lai
 */
function loadProgress() {
    const saved = localStorage.getItem('flashcard_progress');
    return saved ? JSON.parse(saved) : null;
}
