# 집 컴퓨터 설정 가이드

집 컴퓨터에서 동일한 개발 환경을 설정하는 방법입니다.

## 1단계: 필수 프로그램 설치

### Node.js 설치
1. https://nodejs.org 방문
2. LTS 버전 다운로드 (현재 회사 컴퓨터: v24.12.0)
3. 설치 후 확인:
```bash
node --version
npm --version
```

### Git 설치 (이미 있다면 건너뛰기)
1. https://git-scm.com 방문
2. Windows용 다운로드 및 설치

### GitHub CLI 설치
```bash
winget install --id GitHub.cli --accept-source-agreements --accept-package-agreements
```

## 2단계: GitHub 인증

터미널 재시작 후:
```bash
# GitHub 로그인
gh auth login
```
- GitHub.com 선택
- HTTPS 선택
- 브라우저로 로그인 선택
- 브라우저에서 인증 완료

## 3단계: 프로젝트 클론

작업할 폴더로 이동 후:
```bash
# 저장소 클론
git clone https://github.com/gekodesignkisung/my-website.git

# 프로젝트 폴더로 이동
cd my-website

# 의존성 패키지 설치
npm install
```

## 4단계: 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기

---

## 일상적인 작업 흐름

### 회사에서 작업 종료 시:
```bash
git add .
git commit -m "작업 내용 설명"
git push
```

### 집에서 작업 시작 시:
```bash
# 최신 코드 받기
git pull

# 새 패키지가 추가되었을 수 있으니 설치
npm install

# 개발 서버 실행
npm run dev
```

### 집에서 작업 종료 시:
```bash
git add .
git commit -m "작업 내용 설명"
git push
```

### 다음날 회사에서:
```bash
git pull
npm install
npm run dev
```

---

## 주의사항

1. **작업 시작 전 항상 `git pull`**
2. **작업 종료 후 항상 `git push`**
3. 같은 파일을 동시에 수정하지 않기
4. `.env` 파일은 Git에 올라가지 않으므로 별도로 설정 필요

---

## 충돌 발생 시

만약 양쪽에서 동시에 작업해서 충돌이 발생하면:

```bash
# 현재 변경사항 임시 저장
git stash

# 최신 코드 받기
git pull

# 임시 저장한 변경사항 다시 적용
git stash pop

# 충돌 파일 수동으로 수정 후
git add .
git commit -m "충돌 해결"
git push
```

---

## 유용한 명령어

```bash
# 현재 상태 확인
git status

# 변경 내역 확인
git log --oneline -5

# 원격 저장소와 차이 확인
git diff origin/master

# 특정 파일만 커밋
git add 파일명
git commit -m "메시지"
git push
```

---

## Vercel 자동 배포

GitHub에 push하면 Vercel이 자동으로 배포합니다.
- 배포 상태: https://vercel.com/gekodesignkisungs-projects/my-website
- 실제 사이트: https://my-website-weld-nine.vercel.app

---

## 문제 해결

### "gh: command not found" 오류
- 터미널을 완전히 닫고 다시 열기
- 또는 전체 경로 사용: `"/c/Program Files/GitHub CLI/gh" auth login`

### npm install 오류
```bash
# 캐시 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### 포트 충돌 (3000 포트가 이미 사용 중)
```bash
# 다른 포트로 실행
npm run dev -- -p 3001
```
