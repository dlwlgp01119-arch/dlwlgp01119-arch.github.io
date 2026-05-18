document.getElementById('startBtn').addEventListener('click', function () {
  document.getElementById('start').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('recommendBtn').addEventListener('click', function () {
  const interest = document.getElementById('interest').value;
  const result = document.getElementById('result');

  if (!interest) {
    result.textContent = '먼저 관심 분야를 선택해 주세요.';
    return;
  }

  const recommendations = {
    science: '추천 방향: 화학, 생명과학, 약학, 식품공학 관련 학과',
    people: '추천 방향: 교육학, 심리학, 사회복지, 간호학 관련 학과',
    tech: '추천 방향: 컴퓨터공학, 인공지능, 데이터사이언스, 전자공학 관련 학과',
    design: '추천 방향: 산업디자인, 콘텐츠기획, 미디어, UX/UI 관련 학과'
  };

  result.textContent = recommendations[interest];
});
