# Cloud_R-Analyzer
An advanced web application for recruiters that leverages AI, NLP, and cloud-based machine learning to parse, analyze, and rank resumes with high accuracy and efficiency. Instantly compare candidate profiles against job descriptions, get transparent scoring, actionable insights, and enjoy an interactive, visually impressive dashboard. Features include semantic JD/resume matching, skill gap analysis, explainable AI, customizable scoring, recruiter collaboration, and automated candidate communications—all in a sleek, responsive UI.

<div align="center">

![Cloud R-Analyzer Logo](https://img.shields.io/badge/Cloud-R--Analyzer-2563eb?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMy44OC03LjE2TDExLjE2IDguMTJjLS4zMy0uMzMtLjg1LS4zMy0xLjE4IDBzLS4zMy44NSAwIDEuMThsNC4yNSA0LjI1YzMzLjMzLjMzLjg1LjMzIDEuMTggMHMuMzMtLjg1IDAtMS4xOHoiLz48L3N2Zz4=)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

A modern, single-page web application for resume analysis, job matching, and talent management powered by Cloud AI technology. This application provides a comprehensive solution for HR professionals and recruiters to analyze resumes, match candidates to job descriptions, compare multiple candidates, and gain insights through talent analytics.

## ✨ Features

### Core Functionality
- **Resume Parsing & Analysis**: Upload and analyze resumes to extract key information including skills, experience, education, and more
- **Job Description Processing**: Enter job details to identify key requirements and qualifications
- **Intelligent Matching**: Advanced AI-powered matching between resumes and job descriptions
- **Match Explanation**: Detailed breakdown of match scores with visual representations

### Advanced Features
- **Candidate Comparison**: Compare multiple candidates side-by-side with filtering and bulk actions
- **Talent Analytics**: Visual insights into your candidate pool with interactive charts
- **Candidate Q&A**: AI-powered question answering system for candidate information
- **Automated Messaging**: Template-based messaging system for candidate communication
- **Score Weighting Customization**: Adjust importance of different factors in the matching algorithm
- **Collaborative Tools**: Comment system for team collaboration
- **Light/Dark Mode**: Toggle between light and dark themes for comfortable viewing

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for loading external resources (fonts, icons)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cloud-r-analyzer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cloud-r-analyzer
   ```

3. Open the application:
   ```bash
   # Simply open index.html in your browser
   # For Windows
   start index.html
   # For macOS
   open index.html
   # For Linux
   xdg-open index.html
   ```

### Using a Local Server (Optional)

For better performance and to avoid CORS issues when loading local files:

1. Using Python:
   ```bash
   # Python 3.x
   python -m http.server
   # Then open http://localhost:8000 in your browser
   ```

2. Using Node.js:
   ```bash
   # Install http-server if you haven't already
   npm install -g http-server
   # Run the server
   http-server
   # Then open http://localhost:8080 in your browser
   ```

## 📖 Usage Guide

### 1. Upload Resume
- Drag and drop your resume file or click to browse
- Supported formats: PDF, DOCX, TXT
- View parsed resume information and extracted skills

### 2. Job Description
- Enter job title, company name, and description
- View extracted requirements categorized by skills, experience, and education

### 3. Match Results
- View overall match score and detailed breakdown
- Explore strengths and skill gaps
- Customize score weighting to prioritize different factors
- Generate AI-powered recommendations

### 4. Candidate Comparison
- Compare multiple candidates side-by-side
- Filter candidates by match score, skills, or experience
- Perform bulk actions like messaging or exporting

### 5. Talent Analytics
- View distribution of skills across candidates
- Analyze experience levels and education backgrounds
- Identify trends and gaps in your talent pool

## 🛠️ Technical Details

### Architecture
Cloud R-Analyzer is built as a single-page application using vanilla HTML, CSS, and JavaScript:

- **HTML**: Semantic structure with modern HTML5 elements
- **CSS**: Custom styling with CSS variables for theming
- **JavaScript**: ES6+ features for interactive functionality

### External Libraries
- **Chart.js**: For data visualization and interactive charts
- **Material Icons & Font Awesome**: For UI icons
- **Google Fonts (Roboto)**: For typography

### Data Storage
The application uses browser localStorage for data persistence between sessions, including:
- User preferences (theme, score weights)
- Recent analyses
- Saved candidates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Based on the AI Resume Analyzer project
- Icons provided by Material Icons and Font Awesome
- Charts powered by Chart.js
- Fonts by Google Fonts

---

<div align="center">
Made with ❤️ by Your Name
</div>