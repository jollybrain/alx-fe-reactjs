import React from "react";


const MainContent = () => {
    return (
        <MainContent>
             <p>I love to visit New York, Paris, and Tokyo.</p>
        </MainContent>
        
        
       
    )

}
function MainContent({ content }) {
    return (
      <main style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '5px', margin: '10px' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{content}</p>
      </main>
    );
  }


export default MainContent