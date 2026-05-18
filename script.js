document.getElementById('careerForm').addEventListener('submit', function(e) {
    // 폼 제출 시 페이지 새로고침 방지
    e.preventDefault();

    // 입력값 가져오기
    const schoolName = document.getElementById('schoolName').value;
    const grade = document.getElementById('grade').value;
    const majorTrack = document.getElementById('majorTrack').value;
    
    const scoreKorean = parseInt(document.getElementById('scoreKorean').value);
    const scoreMath = parseInt(document.getElementById('scoreMath').value);
    const scoreEnglish = parseInt(document.getElementById('scoreEnglish').value);
    
    const interest = document.getElementById('interest').value;

    // 성적 유효성 검사 (1~9등급 사이인지 확인)
    if (scoreKorean < 1 || scoreKorean > 9 || 
        scoreMath < 1 || scoreMath > 9 || 
        scoreEnglish < 1 || scoreEnglish > 9) {
        alert('성적은 1등급에서 9등급 사이로 입력해 주세요.');
        return;
    }

    // 데이터 객체화 (추후 서버로 보내거나 분석에 사용 가능)
    const studentData = {
        school: schoolName,
        grade: grade,
        track: majorTrack,
        scores: {
            korean: scoreKorean,
            math: scoreMath,
            english: scoreEnglish
        },
        interest: interest
    };

    console.log('저장된 학생 데이터:', studentData);
    
    // 성공 메시지
    alert(`${schoolName} ${grade}학년 프로필 등록이 완료되었습니다!\n진로 분석을 시작합니다.`);
    
    // 여기에 다음 페이지로 이동하거나 결과를 보여주는 로직을 추가할 수 있습니다.
});
