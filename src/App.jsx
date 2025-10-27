import { useState } from 'react'
import './App.css'
import Aurora from './assets/components/Aurora'
import CardNav  from './assets/components/CardNav'
import prfp from './assets/images/prfp.jpeg'
import PDFViewer from './assets/components/pdfviewer'
import ScrollStack, { ScrollStackItem } from './assets/components/ScrollStack'

function App() {
  const items = [
    {
      label: "About",
      bgColor: "#0d0716",
      textColor: "#fff",
      links: [
        { label: "Experience", ariaLabel: "About Experience" ,href:"#about"},
        { label: "Career", ariaLabel: "About Career" ,href:"#about"}
      ]
    },
    {
      label: "Projects", 
      bgColor: "#2d22a1ff",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" ,href:"#projects"},
        { label: "Research", ariaLabel: "Research Projects" ,href:"#projects"}
      ]
    },
    {
      label: "Contact",
      bgColor: "#932c2cff", 
      textColor: "#fff",
      links: [
        { label: "LinkedIn", ariaLabel: "LinkedIn" ,href:"https://www.linkedin.com/in/duttdigvijay/"},
        { label: "GitHub", ariaLabel: "GitHub" ,href:"https://github.com/DigvijayDutt"},
        { label: "duttdigvijay@gmail.com", ariaLabel: "Email",href:"#contact" }
      ]
    }
  ];

  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <CardNav 
        logo={prfp}
        logoAlt="Digvijay Dutt"
        items={items}
        baseColor="#111"
        menuColor="#fff"
        buttonBgColor="#fff"
        buttonTextColor="#111"
        ease="power3.out"
      />
      <body style={{display:"flex"}}>
        <div style={{zIndex:1, width:"100%", maxWidth:"820px", display:'flex', flexDirection:'column', alignItems:'flex-start', position:'absolute', top:"10vh"}}>
          <div>
            <h1 id='about' style={{position:'relative',left:'0'}}>About me:</h1>
            <p>I am a 3rd-year B.Tech Computer Science student passionate about technology and innovation with 8 months of hands-on experience in AI/ML using Python , I have developed a strong foundation in machine learning concepts.<br/><br/>Additionally, I am skilled in the MERN stack for web development ,enabling me to create dynamic and responsive applications.<br/><br/> I actively pursue competitive programming in Python, honing problem-solving and algorithmic skills .<br/><br/>Eager to contribute and grow through challenging opportunities .</p>
            <h3 >Experience: </h3>
              <img src="/intern.jpg"></img>
            <h3 >Education/Certifications: </h3>
            <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", maxWidth:"800px"}}>
              <PDFViewer fileN='/cert1.pdf' />
              <PDFViewer fileN='/cert2.pdf' />
              <PDFViewer fileN='/udemy.pdf' />
            </div>
          </div>
          <div>
            <h1 id='projects'>Projects:</h1>
            <h3 >Featured: (scroll here)</h3>
            <div style={{ width: "100%", height: "300px", overflow: "hidden" ,position:'center'}}>
              <ScrollStack
                className="custom-scroll-stack"
                itemDistance={30}
                itemStackDistance={20}
                itemScale={0.04}
                baseScale={0.85}
                stackPosition="0.5%"
                scaleEndPosition="10%"
                blurAmount={0}
                rotationAmount={0}
                onStackComplete={() => console.log('All cards stacked!')}
              >
                <ScrollStackItem itemClassName="project-card">
                  <div className="card-content" style={{borderRadius: "1rem" }}>
                    <h2>Featured Project 1</h2>
                    <p>This project showcases advanced FastAPI usage with background tasks and WebSocket integration.</p>
                  </div>
                </ScrollStackItem>

                <ScrollStackItem itemClassName="project-card">
                  <div className="card-content" style={{ borderRadius: "1rem" }}>
                    <h2>Featured Project 2</h2>
                    <p>An ML pipeline with automated data validation using Great Expectations and MLflow tracking.</p>
                  </div>
                </ScrollStackItem>

                <ScrollStackItem itemClassName="project-card">
                  <div className="card-content" style={{ borderRadius: "1rem" }}>
                    <h2>Featured Project 3</h2>
                    <p>A personal research project exploring hybrid AI architectures with reinforcement learning agents.</p>
                  </div>
                </ScrollStackItem>
              </ScrollStack>
            </div>            
            <h3 >Research: </h3>
            <div style={{width:"100%"}}>
              <PDFViewer fileN='/paper.pdf' />
            </div>
          </div>
          <div>
            <h1 id='contact'>Contact:</h1>
          </div>
        </div>

      </body>

    </>
  )
}

export default App
