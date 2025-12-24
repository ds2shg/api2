# AI 제주도 (AI JejuChat)

이 프로젝트는 로컬 Ollama 인스턴스와 통신하는 프리미엄 웹 인터페이스입니다.

## 다른 컴퓨터에서 실행하는 방법

### 1. 소스 다운로드 (Clone/Download)
터미널에서 다음 명령어를 실행하여 소스를 다운로드하거나, GitHub 웹사이트에서 `Code` 버튼 -> `Download ZIP`을 클릭하세요.

```bash
git clone https://github.com/ds2shg/api2.git
cd api2
```

### 2. 설치 및 실행 (Installation & Run)
필요한 라이브러리를 설치하고 서버를 실행합니다.

```bash
npm install
npm run dev
```

### 3. 접속 (Access)
브라우저 주소창에 다음 주소를 입력하여 접속합니다.

- **기본 접속**: [http://localhost:3000](http://localhost:3000)
- **Ollama 연결**: 이 프로젝트는 `http://jeju.local:8080`에 있는 Ollama 서버를 바라보도록 설정되어 있습니다.

## 기능 (Features)
- **Modern UI**: 다크 모드 기반의 글래스모피즘 디자인
- **Local Proxy**: Next.js API Routes를 통한 CORS 우회 및 로컬 통신
- **Custom Hostname**: `jeju.local` 호환 (호스트 파일 설정 필요)
