// Cloud R-Analyzer JavaScript

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;
    
    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Resume Upload
    const dropzone = document.getElementById('resume-dropzone');
    const fileInput = document.getElementById('resume-file');
    const uploadProgress = document.getElementById('upload-progress');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    // Job Description
    const jobForm = document.getElementById('job-form');
    const jobRequirements = document.getElementById('job-requirements');
    
    // Match Results
    const matchResultsContainer = document.getElementById('match-results-container');
    const resetButton = document.getElementById('reset-button');
    
    // Candidate Comparison
    const comparisonTable = document.getElementById('comparison-table');
    const bulkActionButtons = document.querySelectorAll('.bulk-action');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Talent Analytics
    const analyticsChartTabs = document.querySelectorAll('.chart-tab');
    
    // Candidate Q&A
    const qaForm = document.getElementById('qa-form');
    const qaResponse = document.getElementById('qa-response');
    
    // Automated Messaging
    const messageTypeButtons = document.querySelectorAll('.message-type-btn');
    const messagePreview = document.getElementById('message-preview');
    
    // Feedback Form
    const feedbackPanel = document.getElementById('feedback-panel');
    const feedbackToggle = document.getElementById('feedback-toggle');
    const closeFeedbackBtn = document.getElementById('close-feedback');
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const feedbackForm = document.getElementById('feedback-form');
    
    // Comments Panel
    const commentsPanel = document.getElementById('comments-panel');
    const commentsToggle = document.getElementById('comments-toggle');
    const closeCommentsBtn = document.getElementById('close-comments');
    const commentForm = document.getElementById('comment-form');
    
    // Initialize Charts
    let doughnutChart = null;
    let radarChart = null;
    let skillsChart = null;
    let diversityChart = null;
    let trendsChart = null;
    
    // Mock Data
    const mockData = {
        resumeData: {
            name: "John Smith",
            email: "john.smith@example.com",
            phone: "(555) 123-4567",
            skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML", "CSS", "Git", "REST APIs"],
            experience: [
                {
                    title: "Senior Frontend Developer",
                    company: "Tech Solutions Inc.",
                    duration: "2019 - Present",
                    description: "Led development of responsive web applications using React and TypeScript."
                },
                {
                    title: "Frontend Developer",
                    company: "Digital Innovations",
                    duration: "2016 - 2019",
                    description: "Developed and maintained client websites using JavaScript and jQuery."
                }
            ],
            education: [
                {
                    degree: "Bachelor of Science in Computer Science",
                    institution: "University of Technology",
                    year: "2016"
                }
            ]
        },
        jobData: {
            title: "Senior Frontend Engineer",
            company: "Cloud Innovations",
            description: "We are looking for a Senior Frontend Engineer to join our team. The ideal candidate will have strong experience with modern JavaScript frameworks, particularly React, and a solid understanding of web technologies.",
            requirements: {
                skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "GraphQL", "Webpack"],
                experience: ["5+ years of frontend development", "3+ years with React", "Experience with state management"],
                education: ["Bachelor's degree in Computer Science or related field"]
            }
        },
        matchResult: {
            overallScore: 85,
            categoryScores: {
                skills: 90,
                experience: 80,
                education: 85
            },
            strengths: [
                "Strong proficiency in React and JavaScript",
                "Solid experience with frontend development",
                "Relevant educational background",
                "Experience with TypeScript"
            ],
            gaps: [
                "No experience with GraphQL mentioned",
                "Redux experience not explicitly stated",
                "Webpack knowledge not confirmed"
            ],
            softSkills: [
                "Team leadership",
                "Project management",
                "Communication"
            ],
            aiSummary: "John Smith is a strong candidate for the Senior Frontend Engineer position, with excellent alignment in core technologies like React, JavaScript, and TypeScript. His 6+ years of relevant experience, including a senior role, meets the job requirements. While there are some skill gaps in GraphQL and Redux, his strong foundation in frontend development suggests he could quickly acquire these skills. His educational background in Computer Science is also a good match for the position."
        },
        candidates: [
            {
                id: 1,
                name: "John Smith",
                email: "john.smith@example.com",
                position: "Senior Frontend Engineer",
                date: "2023-06-15",
                overallScore: 85,
                skillsScore: 90,
                experienceScore: 80,
                educationScore: 85
            },
            {
                id: 2,
                name: "Emily Johnson",
                email: "emily.johnson@example.com",
                position: "Senior Frontend Engineer",
                date: "2023-06-14",
                overallScore: 78,
                skillsScore: 85,
                experienceScore: 75,
                educationScore: 70
            },
            {
                id: 3,
                name: "Michael Chen",
                email: "michael.chen@example.com",
                position: "Senior Frontend Engineer",
                date: "2023-06-13",
                overallScore: 92,
                skillsScore: 95,
                experienceScore: 90,
                educationScore: 90
            },
            {
                id: 4,
                name: "Sarah Williams",
                email: "sarah.williams@example.com",
                position: "Senior Frontend Engineer",
                date: "2023-06-12",
                overallScore: 65,
                skillsScore: 60,
                experienceScore: 70,
                educationScore: 75
            },
            {
                id: 5,
                name: "David Rodriguez",
                email: "david.rodriguez@example.com",
                position: "Senior Frontend Engineer",
                date: "2023-06-11",
                overallScore: 88,
                skillsScore: 90,
                experienceScore: 85,
                educationScore: 80
            }
        ],
        analytics: {
            skillDistribution: {
                labels: ["JavaScript", "React", "TypeScript", "Node.js", "HTML/CSS", "GraphQL", "Redux", "Vue.js", "Angular"],
                data: [95, 85, 70, 60, 90, 40, 55, 30, 25]
            },
            experienceDistribution: {
                labels: ["0-2 years", "3-5 years", "6-8 years", "9+ years"],
                data: [15, 40, 30, 15]
            },
            diversityData: {
                gender: { labels: ["Male", "Female", "Non-binary", "Undisclosed"], data: [45, 35, 5, 15] },
                ethnicity: { labels: ["White", "Asian", "Black", "Hispanic", "Other", "Undisclosed"], data: [40, 25, 15, 10, 5, 5] },
                age: { labels: ["18-24", "25-34", "35-44", "45-54", "55+", "Undisclosed"], data: [10, 45, 30, 10, 5, 0] }
            },
            trendsData: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                applications: [45, 52, 49, 60, 55, 70],
                hires: [5, 7, 6, 8, 7, 10],
                averageScore: [72, 75, 73, 78, 76, 80]
            }
        },
        qaResponses: {
            "What skills are most important for this role?": "Based on the job description and market trends, the most critical skills for this Senior Frontend Engineer role are React, TypeScript, and state management (Redux). While GraphQL is listed as a requirement, it appears to be less common among candidates. Strong JavaScript fundamentals and experience with modern build tools like Webpack are also highly valued.",
            "How does this candidate compare to others?": "This candidate (John Smith) ranks in the top 30% of applicants for this position. His strengths in React and TypeScript align well with the core requirements. Compared to other candidates, he has above-average experience but could improve in some specialized areas like GraphQL and Redux to be more competitive with top candidates.",
            "What questions should I ask in the interview?": "To effectively evaluate this candidate, consider asking: 1) Specific examples of complex React components they've built, 2) Their experience with performance optimization in React applications, 3) How they've implemented state management in previous projects, 4) Their approach to learning new technologies like GraphQL, and 5) Examples of how they've collaborated with backend developers on API integration.",
            "What salary range is appropriate?": "Based on the candidate's experience level, skill set, and current market conditions, an appropriate salary range for this Senior Frontend Engineer position would be $120,000-$145,000 annually. This range accounts for the candidate's 6+ years of experience and proficiency in key technologies while acknowledging the skill gaps in some required areas."
        },
        messageTemplates: {
            "interview": {
                subject: "Interview Invitation: Senior Frontend Engineer Position at Cloud Innovations",
                body: "Dear John Smith,\n\nThank you for applying to the Senior Frontend Engineer position at Cloud Innovations. We were impressed with your experience and qualifications, particularly your strong background in React and TypeScript.\n\nWe would like to invite you for a virtual interview to further discuss your experience and how you might fit with our team. Could you please let us know your availability for a 45-minute interview in the coming week?\n\nBest regards,\nRecruitment Team\nCloud Innovations"
            },
            "follow-up": {
                subject: "Following Up on Your Senior Frontend Engineer Application",
                body: "Dear John Smith,\n\nI hope this email finds you well. I wanted to follow up regarding your application for the Senior Frontend Engineer position at Cloud Innovations.\n\nYour profile shows a strong match with our requirements, particularly in React and JavaScript development. We're currently reviewing applications and expect to begin the interview process soon.\n\nIn the meantime, please feel free to reach out if you have any questions about the role or our company.\n\nBest regards,\nRecruitment Team\nCloud Innovations"
            },
            "offer": {
                subject: "Job Offer: Senior Frontend Engineer at Cloud Innovations",
                body: "Dear John Smith,\n\nI am pleased to inform you that we would like to offer you the position of Senior Frontend Engineer at Cloud Innovations. Your experience with React and frontend development, along with your impressive technical skills, make you an excellent fit for our team.\n\nWe are offering an annual salary of $135,000, along with our comprehensive benefits package including health insurance, 401(k) matching, and flexible work arrangements.\n\nPlease review the attached offer letter for complete details. We would appreciate your response by [Date].\n\nWe are excited about the possibility of you joining our team!\n\nBest regards,\nRecruitment Team\nCloud Innovations"
            },
            "rejection": {
                subject: "Update on Your Application to Cloud Innovations",
                body: "Dear John Smith,\n\nThank you for your interest in the Senior Frontend Engineer position at Cloud Innovations and for taking the time to apply.\n\nAfter careful consideration of your profile against our current requirements, we have decided to proceed with other candidates whose experience more closely aligns with our specific needs at this time.\n\nWe appreciate your interest in Cloud Innovations and wish you success in your job search.\n\nBest regards,\nRecruitment Team\nCloud Innovations"
            }
        },
        comments: [
            {
                id: 1,
                author: "Alex Thompson",
                time: "2 hours ago",
                text: "I interviewed John last week. He has excellent React knowledge and communicated well. His system design skills need improvement, but overall a strong candidate."
            },
            {
                id: 2,
                author: "Maria Garcia",
                time: "Yesterday",
                text: "Reviewed his technical assessment. Scored 42/50. Code was clean and well-structured. Missed some edge cases in the algorithm question."
            },
            {
                id: 3,
                author: "Raj Patel",
                time: "2 days ago",
                text: "Had a good conversation about his experience with TypeScript. He's been using it for 3+ years and seems very comfortable with advanced types."
            }
        ]
    };
    
    // Initialize the application
    function init() {
        // Set up event listeners
        setupEventListeners();
        
        // Initialize UI components
        initializeUI();
        
        // Load mock data for demonstration
        loadMockData();
    }
    
    // Set up all event listeners
    function setupEventListeners() {
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Tab navigation
        tabButtons.forEach(button => {
            button.addEventListener('click', () => switchTab(button.dataset.tab));
        });
        
        // Resume upload
        if (dropzone) {
            dropzone.addEventListener('click', () => fileInput.click());
            dropzone.addEventListener('dragover', handleDragOver);
            dropzone.addEventListener('dragleave', handleDragLeave);
            dropzone.addEventListener('drop', handleDrop);
        }
        
        if (fileInput) {
            fileInput.addEventListener('change', handleFileSelect);
        }
        
        // Job form
        if (jobForm) {
            jobForm.addEventListener('submit', handleJobSubmit);
        }
        
        // Reset button
        if (resetButton) {
            resetButton.addEventListener('click', resetAnalysis);
        }
        
        // Candidate comparison filters
        filterButtons.forEach(button => {
            button.addEventListener('click', () => filterCandidates(button.dataset.filter));
        });
        
        // Bulk action buttons
        bulkActionButtons.forEach(button => {
            button.addEventListener('click', () => handleBulkAction(button.dataset.action));
        });
        
        // Analytics chart tabs
        analyticsChartTabs.forEach(tab => {
            tab.addEventListener('click', () => switchAnalyticsChart(tab.dataset.chart));
        });
        
        // Q&A form
        if (qaForm) {
            qaForm.addEventListener('submit', handleQASubmit);
        }
        
        // Message type buttons
        messageTypeButtons.forEach(button => {
            button.addEventListener('click', () => switchMessageType(button.dataset.type));
        });
        
        // Feedback panel
        if (feedbackToggle) {
            feedbackToggle.addEventListener('click', toggleFeedbackPanel);
        }
        
        if (closeFeedbackBtn) {
            closeFeedbackBtn.addEventListener('click', toggleFeedbackPanel);
        }
        
        // Rating buttons
        ratingButtons.forEach(button => {
            button.addEventListener('click', () => setRating(button.dataset.rating));
        });
        
        // Feedback form
        if (feedbackForm) {
            feedbackForm.addEventListener('submit', handleFeedbackSubmit);
        }
        
        // Comments panel
        if (commentsToggle) {
            commentsToggle.addEventListener('click', toggleCommentsPanel);
        }
        
        if (closeCommentsBtn) {
            closeCommentsBtn.addEventListener('click', toggleCommentsPanel);
        }
        
        // Comment form
        if (commentForm) {
            commentForm.addEventListener('submit', handleCommentSubmit);
        }
        
        // Score weight sliders
        const weightSliders = document.querySelectorAll('.weight-slider input');
        weightSliders.forEach(slider => {
            slider.addEventListener('input', updateScoreWeights);
        });
    }
    
    // Initialize UI components
    function initializeUI() {
        // Set initial theme based on user preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            htmlElement.setAttribute('data-theme', 'dark');
            themeIcon.textContent = 'light_mode';
        }
        
        // Set initial active tab
        switchTab('upload-resume');
        
        // Initialize charts (empty at first)
        initializeCharts();
    }
    
    // Toggle between light and dark theme
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.removeAttribute('data-theme');
            themeIcon.textContent = 'dark_mode';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeIcon.textContent = 'light_mode';
        }
    }
    
    // Switch between tabs
    function switchTab(tabId) {
        // Update active tab button
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Update active tab content
        tabPanes.forEach(pane => {
            if (pane.id === tabId) {
                pane.classList.add('active');
                // Refresh charts if they exist in this tab
                if (tabId === 'match-results' && doughnutChart && radarChart) {
                    doughnutChart.update();
                    radarChart.update();
                } else if (tabId === 'talent-analytics' && skillsChart && diversityChart && trendsChart) {
                    skillsChart.update();
                    diversityChart.update();
                    trendsChart.update();
                }
            } else {
                pane.classList.remove('active');
            }
        });
    }
    
    // Handle drag over event for dropzone
    function handleDragOver(e) {
        e.preventDefault();
        dropzone.classList.add('dropzone-active');
    }
    
    // Handle drag leave event for dropzone
    function handleDragLeave(e) {
        e.preventDefault();
        dropzone.classList.remove('dropzone-active');
    }
    
    // Handle drop event for dropzone
    function handleDrop(e) {
        e.preventDefault();
        dropzone.classList.remove('dropzone-active');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            handleFileUpload(files[0]);
        }
    }
    
    // Handle file selection from input
    function handleFileSelect(e) {
        const files = e.target.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    }
    
    // Handle file upload (simulated)
    function handleFileUpload(file) {
        // Show upload progress
        uploadProgress.classList.remove('hidden');
        
        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    // Hide progress and show success message
                    uploadProgress.classList.add('hidden');
                    showNotification('Resume uploaded successfully!', 'success');
                    
                    // Update UI to show file name
                    const fileNameElement = document.getElementById('uploaded-file-name');
                    if (fileNameElement) {
                        fileNameElement.textContent = file.name;
                        document.getElementById('upload-success').classList.remove('hidden');
                        dropzone.classList.add('hidden');
                    }
                    
                    // Enable the job description tab
                    enableTab('job-description');
                    
                    // Switch to job description tab
                    setTimeout(() => switchTab('job-description'), 1000);
                }, 500);
            }
        }, 200);
    }
    
    // Handle job form submission
    function handleJobSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const jobTitle = document.getElementById('job-title').value;
        const company = document.getElementById('company').value;
        const jobDescription = document.getElementById('job-description-text').value;
        
        // Validate form
        if (!jobTitle || !company || !jobDescription) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = jobForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="material-icons">hourglass_empty</i> Processing...';
        
        // Simulate processing
        setTimeout(() => {
            // Display job requirements (from mock data)
            displayJobRequirements(mockData.jobData.requirements);
            
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Show success message
            showNotification('Job description processed successfully!', 'success');
            
            // Enable match results tab
            enableTab('match-results');
            
            // Switch to match results tab
            setTimeout(() => {
                switchTab('match-results');
                displayMatchResults(mockData.matchResult);
            }, 1000);
        }, 2000);
    }
    
    // Display job requirements
    function displayJobRequirements(requirements) {
        // Clear previous content
        jobRequirements.innerHTML = '';
        
        // Create sections for skills, experience, and education
        const sections = [
            { title: 'Required Skills', data: requirements.skills, icon: 'code' },
            { title: 'Experience', data: requirements.experience, icon: 'work' },
            { title: 'Education', data: requirements.education, icon: 'school' }
        ];
        
        // Create and append each section
        sections.forEach(section => {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'result-section';
            
            const header = document.createElement('div');
            header.className = 'card-header';
            header.innerHTML = `
                <i class="material-icons">${section.icon}</i>
                <h4>${section.title}</h4>
            `;
            
            const list = document.createElement('ul');
            list.className = section.title === 'Required Skills' ? 'skills-list' : '';
            
            section.data.forEach(item => {
                if (section.title === 'Required Skills') {
                    const skillPill = document.createElement('li');
                    skillPill.className = 'skill-pill';
                    skillPill.textContent = item;
                    list.appendChild(skillPill);
                } else {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    list.appendChild(listItem);
                }
            });
            
            sectionElement.appendChild(header);
            sectionElement.appendChild(list);
            jobRequirements.appendChild(sectionElement);
        });
        
        // Show the requirements section
        jobRequirements.classList.remove('hidden');
    }
    
    // Display match results
    function displayMatchResults(results) {
        // Update charts with data
        updateMatchCharts(results);
        
        // Update text content
        document.getElementById('ai-summary').textContent = results.aiSummary;
        
        // Update strengths list
        const strengthsList = document.getElementById('strengths-list');
        strengthsList.innerHTML = '';
        results.strengths.forEach(strength => {
            const li = document.createElement('li');
            li.textContent = strength;
            strengthsList.appendChild(li);
        });
        
        // Update gaps list
        const gapsList = document.getElementById('gaps-list');
        gapsList.innerHTML = '';
        results.gaps.forEach(gap => {
            const li = document.createElement('li');
            li.textContent = gap;
            gapsList.appendChild(li);
        });
        
        // Update soft skills list
        const softSkillsList = document.getElementById('soft-skills-list');
        softSkillsList.innerHTML = '';
        results.softSkills.forEach(skill => {
            const skillPill = document.createElement('li');
            skillPill.className = 'skill-pill secondary';
            skillPill.textContent = skill;
            softSkillsList.appendChild(skillPill);
        });
        
        // Show match results container
        matchResultsContainer.classList.remove('hidden');
        
        // Enable other tabs
        enableTab('candidate-comparison');
        enableTab('talent-analytics');
        enableTab('candidate-qa');
        enableTab('automated-messaging');
    }
    
    // Update match charts
    function updateMatchCharts(results) {
        // Update doughnut chart for overall score
        if (doughnutChart) {
            doughnutChart.data.datasets[0].data = [results.overallScore, 100 - results.overallScore];
            doughnutChart.update();
        }
        
        // Update radar chart for category scores
        if (radarChart) {
            radarChart.data.datasets[0].data = [
                results.categoryScores.skills,
                results.categoryScores.experience,
                results.categoryScores.education
            ];
            radarChart.update();
        }
        
        // Update score display
        document.getElementById('score-value').textContent = `${results.overallScore}%`;
    }
    
    // Reset analysis
    function resetAnalysis() {
        // Reset file upload
        fileInput.value = '';
        document.getElementById('upload-success').classList.add('hidden');
        dropzone.classList.remove('hidden');
        
        // Reset job form
        jobForm.reset();
        jobRequirements.innerHTML = '';
        jobRequirements.classList.add('hidden');
        
        // Reset match results
        matchResultsContainer.classList.add('hidden');
        
        // Disable tabs
        disableTab('job-description');
        disableTab('match-results');
        disableTab('candidate-comparison');
        disableTab('talent-analytics');
        disableTab('candidate-qa');
        disableTab('automated-messaging');
        
        // Switch to upload tab
        switchTab('upload-resume');
        
        // Show notification
        showNotification('Analysis reset successfully', 'info');
    }
    
    // Filter candidates in comparison table
    function filterCandidates(filter) {
        // Update active filter button
        filterButtons.forEach(button => {
            if (button.dataset.filter === filter) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Get all candidate rows
        const rows = comparisonTable.querySelectorAll('tbody tr');
        
        // Apply filter
        rows.forEach(row => {
            const score = parseInt(row.dataset.score);
            
            switch (filter) {
                case 'all':
                    row.classList.remove('hidden');
                    break;
                case 'high':
                    row.classList.toggle('hidden', score < 85);
                    break;
                case 'medium':
                    row.classList.toggle('hidden', score < 70 || score >= 85);
                    break;
                case 'low':
                    row.classList.toggle('hidden', score >= 70);
                    break;
            }
        });
    }
    
    // Handle bulk actions for candidates
    function handleBulkAction(action) {
        // Get selected candidates
        const selectedCheckboxes = comparisonTable.querySelectorAll('tbody input[type="checkbox"]:checked');
        
        if (selectedCheckboxes.length === 0) {
            showNotification('Please select at least one candidate', 'warning');
            return;
        }
        
        // Get candidate IDs
        const candidateIds = Array.from(selectedCheckboxes).map(checkbox => {
            return checkbox.closest('tr').dataset.id;
        });
        
        // Perform action based on type
        let message = '';
        switch (action) {
            case 'message':
                message = `Messaging ${candidateIds.length} candidates`;
                break;
            case 'interview':
                message = `Scheduling interviews for ${candidateIds.length} candidates`;
                break;
            case 'export':
                message = `Exporting data for ${candidateIds.length} candidates`;
                break;
        }
        
        // Show notification
        showNotification(message, 'info');
        
        // Uncheck all checkboxes
        selectedCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    // Switch between analytics charts
    function switchAnalyticsChart(chartType) {
        // Update active chart tab
        analyticsChartTabs.forEach(tab => {
            if (tab.dataset.chart === chartType) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Show selected chart container
        const chartContainers = document.querySelectorAll('.analytics-chart-container');
        chartContainers.forEach(container => {
            if (container.dataset.chart === chartType) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
    }
    
    // Handle Q&A form submission
    function handleQASubmit(e) {
        e.preventDefault();
        
        // Get question
        const questionInput = document.getElementById('qa-input');
        const question = questionInput.value.trim();
        
        if (!question) {
            showNotification('Please enter a question', 'warning');
            return;
        }
        
        // Show loading state
        qaResponse.innerHTML = `
            <div class="qa-response-header">
                <i class="material-icons">psychology</i>
                <h5>Cloud AI is thinking...</h5>
            </div>
            <p>Processing your question...</p>
        `;
        qaResponse.classList.remove('hidden');
        
        // Simulate AI processing
        setTimeout(() => {
            // Check if we have a pre-defined answer
            const answer = mockData.qaResponses[question] || 
                          "I don't have specific information about that question. Please try asking about the candidate's skills, experience, or how they compare to others.";
            
            // Update response
            qaResponse.innerHTML = `
                <div class="qa-response-header">
                    <i class="material-icons">psychology</i>
                    <h5>Cloud AI Response</h5>
                </div>
                <p>${answer}</p>
            `;
            
            // Clear input
            questionInput.value = '';
        }, 1500);
    }
    
    // Switch message type in automated messaging
    function switchMessageType(type) {
        // Update active message type button
        messageTypeButtons.forEach(button => {
            if (button.dataset.type === type) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Get message template
        const template = mockData.messageTemplates[type];
        
        // Update message preview
        const subjectElement = document.getElementById('message-subject');
        const bodyElement = document.getElementById('message-body');
        
        if (subjectElement && bodyElement && template) {
            subjectElement.textContent = template.subject;
            bodyElement.textContent = template.body;
            messagePreview.classList.remove('hidden');
        }
    }
    
    // Toggle feedback panel
    function toggleFeedbackPanel() {
        feedbackPanel.classList.toggle('hidden');
    }
    
    // Set rating in feedback form
    function setRating(rating) {
        // Update active rating button
        ratingButtons.forEach(button => {
            if (button.dataset.rating === rating) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Store rating in hidden input
        document.getElementById('rating-value').value = rating;
    }
    
    // Handle feedback form submission
    function handleFeedbackSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const rating = document.getElementById('rating-value').value;
        const feedback = document.getElementById('feedback-text').value;
        
        if (!rating) {
            showNotification('Please select a rating', 'warning');
            return;
        }
        
        // Show success message
        showNotification('Thank you for your feedback!', 'success');
        
        // Reset form and close panel
        feedbackForm.reset();
        ratingButtons.forEach(button => button.classList.remove('active'));
        toggleFeedbackPanel();
    }
    
    // Toggle comments panel
    function toggleCommentsPanel() {
        commentsPanel.classList.toggle('hidden');
        
        // If opening panel, load comments
        if (!commentsPanel.classList.contains('hidden')) {
            loadComments();
        }
    }
    
    // Load comments
    function loadComments() {
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = '';
        
        // Add mock comments
        mockData.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-time">${comment.time}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions">
                    <button class="comment-action"><i class="material-icons">thumb_up</i> Like</button>
                    <button class="comment-action"><i class="material-icons">reply</i> Reply</button>
                </div>
            `;
            commentsList.appendChild(commentElement);
        });
    }
    
    // Handle comment form submission
    function handleCommentSubmit(e) {
        e.preventDefault();
        
        // Get comment text
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();
        
        if (!commentText) {
            showNotification('Please enter a comment', 'warning');
            return;
        }
        
        // Create new comment
        const newComment = {
            id: mockData.comments.length + 1,
            author: 'You',
            time: 'Just now',
            text: commentText
        };
        
        // Add to mock data
        mockData.comments.unshift(newComment);
        
        // Reload comments
        loadComments();
        
        // Clear input
        commentInput.value = '';
        
        // Show notification
        showNotification('Comment added successfully', 'success');
    }
    
    // Update score weights
    function updateScoreWeights() {
        // Get weight values
        const skillsWeight = document.getElementById('skills-weight').value;
        const experienceWeight = document.getElementById('experience-weight').value;
        const educationWeight = document.getElementById('education-weight').value;
        
        // Update weight labels
        document.getElementById('skills-weight-value').textContent = `${skillsWeight}%`;
        document.getElementById('experience-weight-value').textContent = `${experienceWeight}%`;
        document.getElementById('education-weight-value').textContent = `${educationWeight}%`;
        
        // Calculate new overall score
        const skillsScore = mockData.matchResult.categoryScores.skills;
        const experienceScore = mockData.matchResult.categoryScores.experience;
        const educationScore = mockData.matchResult.categoryScores.education;
        
        const newOverallScore = Math.round(
            (skillsScore * skillsWeight / 100) +
            (experienceScore * experienceWeight / 100) +
            (educationScore * educationWeight / 100)
        );
        
        // Update overall score display
        document.getElementById('score-value').textContent = `${newOverallScore}%`;
        
        // Update doughnut chart
        if (doughnutChart) {
            doughnutChart.data.datasets[0].data = [newOverallScore, 100 - newOverallScore];
            doughnutChart.update();
        }
        
        // Save weights to localStorage
        saveScoreWeights(skillsWeight, experienceWeight, educationWeight);
    }
    
    // Save score weights to localStorage
    function saveScoreWeights(skills, experience, education) {
        const weights = { skills, experience, education };
        localStorage.setItem('scoreWeights', JSON.stringify(weights));
    }
    
    // Load score weights from localStorage
    function loadScoreWeights() {
        const savedWeights = localStorage.getItem('scoreWeights');
        if (savedWeights) {
            const weights = JSON.parse(savedWeights);
            
            // Update sliders
            document.getElementById('skills-weight').value = weights.skills;
            document.getElementById('experience-weight').value = weights.experience;
            document.getElementById('education-weight').value = weights.education;
            
            // Update labels
            document.getElementById('skills-weight-value').textContent = `${weights.skills}%`;
            document.getElementById('experience-weight-value').textContent = `${weights.experience}%`;
            document.getElementById('education-weight-value').textContent = `${weights.education}%`;
        }
    }
    
    // Enable a tab
    function enableTab(tabId) {
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabId) {
                button.disabled = false;
            }
        });
    }
    
    // Disable a tab
    function disableTab(tabId) {
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabId) {
                button.disabled = true;
                button.classList.remove('active');
            }
        });
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        // Create notification container if it doesn't exist
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        // Set icon based on type
        let icon = 'info';
        switch (type) {
            case 'success': icon = 'check_circle'; break;
            case 'error': icon = 'error'; break;
            case 'warning': icon = 'warning'; break;
        }
        
        // Set content
        notification.innerHTML = `
            <i class="material-icons notification-icon">${icon}</i>
            <div class="notification-content">
                <div class="notification-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="notification-message">${message}</div>
            </div>
        `;
        
        // Add to container
        container.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Initialize charts
    function initializeCharts() {
        // Initialize doughnut chart for overall score
        const doughnutCtx = document.getElementById('doughnut-chart');
        if (doughnutCtx) {
            doughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Match', 'Gap'],
                    datasets: [{
                        data: [0, 100],
                        backgroundColor: ['#3b82f6', '#e5e7eb'],
                        borderWidth: 0,
                        cutout: '80%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    animation: {
                        animateRotate: true,
                        animateScale: true
                    }
                }
            });
        }
        
        // Initialize radar chart for category scores
        const radarCtx = document.getElementById('radar-chart');
        if (radarCtx) {
            radarChart = new Chart(radarCtx, {
                type: 'radar',
                data: {
                    labels: ['Skills', 'Experience', 'Education'],
                    datasets: [{
                        label: 'Match Score',
                        data: [0, 0, 0],
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderColor: '#3b82f6',
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#3b82f6',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
        
        // Initialize skills distribution chart
        const skillsCtx = document.getElementById('skills-chart');
        if (skillsCtx) {
            skillsChart = new Chart(skillsCtx, {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Skill Distribution',
                        data: [],
                        backgroundColor: '#3b82f6',
                        borderColor: '#2563eb',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }
        
        // Initialize diversity chart
        const diversityCtx = document.getElementById('diversity-chart');
        if (diversityCtx) {
            diversityChart = new Chart(diversityCtx, {
                type: 'pie',
                data: {
                    labels: [],
                    datasets: [{
                        data: [],
                        backgroundColor: [
                            '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
                            '#8b5cf6', '#ec4899', '#6366f1', '#14b8a6'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            });
        }
        
        // Initialize trends chart
        const trendsCtx = document.getElementById('trends-chart');
        if (trendsCtx) {
            trendsChart = new Chart(trendsCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: 'Applications',
                            data: [],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Hires',
                            data: [],
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Average Score',
                            data: [],
                            borderColor: '#f59e0b',
                            backgroundColor: 'rgba(245, 158, 11, 0.1)',
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            yAxisID: 'y1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Count'
                            }
                        },
                        y1: {
                            beginAtZero: true,
                            position: 'right',
                            grid: {
                                drawOnChartArea: false
                            },
                            title: {
                                display: true,
                                text: 'Score'
                            },
                            max: 100
                        }
                    }
                }
            });
        }
    }
    
    // Load mock data for demonstration
    function loadMockData() {
        // Populate comparison table
        populateComparisonTable(mockData.candidates);
        
        // Load analytics data
        loadAnalyticsData(mockData.analytics);
        
        // Load saved score weights
        loadScoreWeights();
    }
    
    // Populate comparison table with candidates
    function populateComparisonTable(candidates) {
        if (!comparisonTable) return;
        
        const tbody = comparisonTable.querySelector('tbody');
        tbody.innerHTML = '';
        
        candidates.forEach(candidate => {
            const row = document.createElement('tr');
            row.dataset.id = candidate.id;
            row.dataset.score = candidate.overallScore;
            
            // Determine score class
            let scoreClass = 'low';
            if (candidate.overallScore >= 85) {
                scoreClass = 'high';
            } else if (candidate.overallScore >= 70) {
                scoreClass = 'medium';
            }
            
            row.innerHTML = `
                <td>
                    <input type="checkbox" id="candidate-${candidate.id}">
                </td>
                <td>
                    <div class="candidate-info">
                        <span class="candidate-name">${candidate.name}</span>
                        <span class="candidate-email">${candidate.email}</span>
                    </div>
                </td>
                <td>${candidate.position}</td>
                <td>${candidate.date}</td>
                <td><span class="score-pill ${scoreClass}">${candidate.overallScore}%</span></td>
                <td>${candidate.skillsScore}%</td>
                <td>${candidate.experienceScore}%</td>
                <td>${candidate.educationScore}%</td>
                <td>
                    <div class="action-icons">
                        <span class="action-icon" title="View Details"><i class="material-icons">visibility</i></span>
                        <span class="action-icon" title="Message"><i class="material-icons">email</i></span>
                        <span class="action-icon" title="Schedule Interview"><i class="material-icons">event</i></span>
                    </div>
                </td>
            `;
            
            tbody.appendChild(row);
        });
        
        // Add event listeners to action icons
        const actionIcons = tbody.querySelectorAll('.action-icon');
        actionIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const action = this.getAttribute('title');
                const candidateId = this.closest('tr').dataset.id;
                showNotification(`${action} for candidate #${candidateId}`, 'info');
            });
        });
    }
    
    // Load analytics data
    function loadAnalyticsData(data) {
        // Update skills chart
        if (skillsChart) {
            skillsChart.data.labels = data.skillDistribution.labels;
            skillsChart.data.datasets[0].data = data.skillDistribution.data;
            skillsChart.update();
        }
        
        // Update diversity chart (default to gender)
        if (diversityChart) {
            diversityChart.data.labels = data.diversityData.gender.labels;
            diversityChart.data.datasets[0].data = data.diversityData.gender.data;
            diversityChart.update();
        }
        
        // Update trends chart
        if (trendsChart) {
            trendsChart.data.labels = data.trendsData.labels;
            trendsChart.data.datasets[0].data = data.trendsData.applications;
            trendsChart.data.datasets[1].data = data.trendsData.hires;
            trendsChart.data.datasets[2].data = data.trendsData.averageScore;
            trendsChart.update();
        }
        
        // Add event listeners to diversity buttons
        const diversityButtons = document.querySelectorAll('.diversity-btn');
        diversityButtons.forEach(button => {
            button.addEventListener('click', function() {
                const type = this.dataset.type;
                
                // Update active button
                diversityButtons.forEach(btn => {
                    btn.classList.toggle('active', btn === this);
                });
                
                // Update chart
                if (diversityChart && data.diversityData[type]) {
                    diversityChart.data.labels = data.diversityData[type].labels;
                    diversityChart.data.datasets[0].data = data.diversityData[type].data;
                    diversityChart.update();
                }
            });
        });
    }
    
    // Initialize the application
    init();
});