export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software develoment",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Development proposal</h1>
    <h2>Project Overview</h2>
    <p>Brief description of the propesed software development project.</p>

    <h2>Scope of work</h2>
    <p>Detailed breakdown of project deliverables and requirements.</p>

    <h2>Timeline</h2>
    <p>Project milestones and delivery schedule</p>

    <h2>Budget</h2>
    <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>

<h2>Executive Summary</h2>
<p>A brief overview of the project, its objectives, and the problem it aims to solve.</p>

<h2>Project Objectives</h2>
<p>Specific goals the project seeks to achieve, including measurable outcomes.</p>

<h2>Scope of Work</h2>
<p>A detailed description of the project's scope, including tasks, deliverables, and responsibilities.</p>

<h2>Project Timeline</h2>
<p>A clear outline of the project's phases and milestones with estimated completion dates.</p>

<h2>Resources</h2>
<p>An overview of the required resources, including human resources, materials, and technology.</p>

<h2>Budget and Costs</h2>
<p>A detailed cost breakdown, including expenses and potential contingencies.</p>

<h2>Risk Management</h2>
<p>Potential risks and how they will be managed or mitigated during the project.</p>

<h2>Conclusion</h2>
<p>A summary of the proposal, including a call to action or next steps for approval.</p>
`,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <h1>Business Letter</h1>

<h2>Your Name</h2>
<p>Your Job Title</p>
<p>Your Company</p>
<p>Your Address</p>
<p>City, State, Zip Code</p>
<p>Email Address</p>
<p>Phone Number</p>

<h2>Date</h2>
<p>Month Day, Year</p>

<h2>Recipient's Name</h2>
<p>Recipient's Job Title</p>
<p>Recipient's Company</p>
<p>Recipient's Address</p>
<p>City, State, Zip Code</p>

<h2>Subject: [Subject of the Letter]</h2>

<p>Dear [Recipient's Name],</p>

<p>[Opening Paragraph: Brief introduction stating the purpose of the letter, such as an inquiry, request, or formal communication.]</p>

<p>[Main Content: Detailed explanation of the matter at hand, providing all necessary information or context.]</p>

<p>[Closing Paragraph: Summary of the key points or call to action, including any expectations or follow-up actions.]</p>

<p>Sincerely,</p>
<p>[Your Name]</p>
<p>[Your Job Title]</p>
<p>[Your Company]</p>
`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>Your Name</h1>
<p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile | Portfolio: yourwebsite.com</p>

<h2>Professional Summary</h2>
<p>A concise summary of your professional background, key skills, and career goals. Focus on relevant experience, strengths, and achievements that make you a strong candidate for the job you're applying for.</p>

<h2>Skills</h2>
<ul>
    <li>Key Skill 1 (e.g., JavaScript, HTML, CSS)</li>
    <li>Key Skill 2 (e.g., Project Management, Agile Methodology)</li>
    <li>Key Skill 3 (e.g., Python, React.js)</li>
    <li>Other relevant technical or soft skills</li>
</ul>

<h2>Professional Experience</h2>
<h3>Job Title – Company Name</h3>
<p>Location | Dates of Employment</p>
<ul>
    <li>Key responsibility or achievement #1</li>
    <li>Key responsibility or achievement #2</li>
    <li>Key responsibility or achievement #3</li>
</ul>

<h3>Job Title – Company Name</h3>
<p>Location | Dates of Employment</p>
<ul>
    <li>Key responsibility or achievement #1</li>
    <li>Key responsibility or achievement #2</li>
    <li>Key responsibility or achievement #3</li>
</ul>

<h2>Education</h2>
<h3>Degree – Institution Name</h3>
<p>Location | Graduation Date</p>
<ul>
    <li>Relevant coursework or academic achievement</li>
    <li>Any honors or awards</li>
</ul>

<h2>Certifications</h2>
<ul>
    <li>Certification Name (e.g., AWS Certified Solutions Architect) – Date Achieved</li>
    <li>Other relevant certifications</li>
</ul>

<h2>Projects</h2>
<ul>
    <li><strong>Project Name</strong>: Brief description of the project, technologies used, and your role in it.</li>
    <li><strong>Project Name</strong>: Brief description of the project, technologies used, and your role in it.</li>
</ul>

<h2>Languages</h2>
<ul>
    <li>Language #1 (e.g., English – Fluent)</li>
    <li>Language #2 (e.g., Spanish – Intermediate)</li>
</ul>

    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
     <h1>Your Name</h1>
<p>Email: your.email@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/yourprofile</p>

<h2>Date</h2>
<p>Month Day, Year</p>

<h2>Hiring Manager's Name</h2>
<p>Hiring Manager's Job Title</p>
<p>Company Name</p>
<p>Company Address</p>
<p>City, State, Zip Code</p>

<h2>Subject: Application for [Job Title]</h2>

<p>Dear [Hiring Manager's Name],</p>

<p>I am writing to express my interest in the [Job Title] position at [Company Name], as advertised on [where you found the job posting]. With my background in [relevant field/industry] and [X] years of experience in [specific skills or expertise], I am confident in my ability to contribute effectively to your team and help [Company Name] achieve its goals.</p>

<p>In my most recent role at [Previous Company], I [briefly mention key responsibilities or accomplishments that relate to the job you’re applying for]. I have developed strong [mention specific skills, e.g., project management, problem-solving, or technical skills] that I believe align with the needs of [Company Name]. My ability to [highlight a key strength or accomplishment relevant to the position] would be a valuable asset in [specific area of the job you’re applying for].</p>

<p>I am particularly excited about the opportunity to work with [Company Name] because [mention something specific about the company that appeals to you, such as its culture, mission, or a recent project]. I am eager to bring my skills in [mention relevant skills or experience] to your team and contribute to the success of [specific company goals or projects].</p>

<p>I have attached my resume for your consideration. I look forward to the opportunity to discuss how my experience and skills can contribute to the success of [Company Name]. Thank you for considering my application. I hope to speak with you soon.</p>

<p>Sincerely,</p>
<p>[Your Name]</p>

     `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h1>Your Name</h1>
<p>Your Address</p>
<p>City, State, Zip Code</p>
<p>Email: your.email@example.com | Phone: (123) 456-7890</p>

<h2>Date</h2>
<p>Month Day, Year</p>

<h2>Recipient's Name</h2>
<p>Recipient's Job Title (if applicable)</p>
<p>Recipient's Address</p>
<p>City, State, Zip Code</p>

<h2>Subject: [Subject of the Letter]</h2>

<p>Dear [Recipient's Name],</p>

<p>[Opening Paragraph: A brief introduction explaining the purpose of the letter, whether it's a request, inquiry, invitation, or other correspondence.]</p>

<p>[Body of the Letter: Detailed explanation or communication, providing relevant information, context, or actions needed. Break it into clear paragraphs if necessary.]</p>

<p>[Closing Paragraph: Summarize the key points or reiterate any requests, including expectations or follow-up actions. Thank the recipient for their time or consideration.]</p>

<p>Sincerely,</p>
<p>[Your Name]</p>

    `,
  },
];
