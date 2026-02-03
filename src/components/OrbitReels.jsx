import React from "react";

const OrbitReels = () => {
  const clients = [
    {
      name: "Ad name 1",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 2",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 3",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 4",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 6",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },  {
      name: "Ad name 1",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 2",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 3",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 4",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 6",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
       {
      name: "Ad name 1",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 2",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 3",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 4",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
     {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
   
  
   
  ];

  const radius = 660;

  return (
    <div
   
      style={{
          //  backgroundImage: "url('./middleCamera.png')",
          //     backgroundSize: "contain",
          //     backgroundPosition: "center",
          //     backgroundRepeat: "no-repeat",
          //     backgroundBlendMode: "multiply",
          //     backgroundColor: "#0000004c", // important for multiply
              
        width: "500px",
        height: "400px",
        margin: "0 auto",
        perspective: "1200px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          animation: "spinY 120s linear infinite",
          transformOrigin: "center center",
        }}
      >
        {clients.map((client, i) => {
          const angle = (360 / clients.length) * i;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Reel Card */}
              <div style={reelCard}>
                {/* IMAGE */}
                <img src={client.image} alt={client.name} style={imageStyle} />

                {/* TOP FILM HOLES */}
                <div style={filmHolesTop}>
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} style={hole} />
                  ))}
                </div>

                {/* BOTTOM FILM HOLES */}
                <div style={filmHolesBottom}>
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} style={hole} />
                  ))}
                </div>

                {/* NAME */}
                <div style={nameTag}>{client.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes spinY {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default OrbitReels;

/* ---------- styles ---------- */

const reelCard = {
  width: "160px",
  height: "80px",
  background: "#000",
  position: "relative",
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow: "0 15px 30px rgba(0,0,0,0.7)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const filmHolesTop = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 10,
};

const filmHolesBottom = {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "10%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 10,
};

const hole = {
  width: "6px",
  height: "6px",
  backgroundColor: "#333",
  borderRadius: "2px",
};

const nameTag = {
  position: "absolute",
  bottom: "8px",
  left: "5px",
  color: "#fff",
  fontSize: "12px",
  fontWeight: "600",
  zIndex: 10,
};
