import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
const About = () => {
    const socialLinks = [
        {
          name: 'YouTube',
          url: 'https://www.youtube.com',
          icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
        },
        {
          name: 'Spotify',
          url: 'https://www.spotify.com',
          icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111624.png',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com',
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
        },
      ];
    
  return (
    <>
      <div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            background: "rgb(133, 133, 134)",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          the Generics
        </h1>

      </div>
      <h1
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        About
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur in
        quisquam beatae omnis, sunt fugit natus ex consequuntur eaque atque
        neque nihil eius quo dolores reprehenderit sed eligendi voluptate fuga
        commodi cumque facere officiis ipsa ullam! Odit et perspiciatis
        distinctio molestias ad perferendis corporis praesentium earum
        inventore, error quo quos vero! Alias a, dolores ratione nihil est
        cumque inventore vitae explicabo reiciendis delectus voluptatem quod,
        sequi eius accusamus quam nobis tenetur quae dolore eos blanditiis
        fugit. Sapiente asperiores repudiandae doloribus suscipit ratione,
        consequuntur placeat enim possimus eligendi repellat praesentium
        doloremque eaque incidunt est excepturi fugit quaerat atque iure saepe
        facere nam tempore. Repellat eveniet ipsam illo alias saepe? Nostrum cum
        illo dicta, alias quibusdam aperiam magni earum molestiae consectetur
        beatae possimus? Libero repellendus ducimus sapiente quod, id architecto
        pariatur molestiae? Aspernatur debitis numquam, nisi pariatur maxime
        amet odio laudantium voluptas accusamus! Delectus blanditiis laboriosam
        libero? Alias autem error animi. Dignissimos!
      </p>
      <div
       
      >
        <Container style={{
             
              background: 'rgb(113, 203, 228)',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
             
          
        }}>
      <h1 >The Generics</h1>
      <Row>
        {socialLinks.map((link) => (
          <Col  >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
           
            >
              <Image
                src={link.icon}
                alt={link.name}
              
                style={{
                width: '30px', 
                  height: '30px',
                 
             display:'flex',
             alignItems:'center',
             justifyContent:"space-between"
                 
                }}
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>

         </div>
     
    </>
  );
};

export default About;
