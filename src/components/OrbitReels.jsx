import React from "react";

const OrbitReels = () => {
  const clients = [
    {
      name: "Ad name 1",
      image:
        "https://www.nykaafashion.com/style-files/wp-content/uploads/2024/06/party-dress-banner.jpg",
    },
    {
      name: "Ad name 2",
      image:
        "https://static01.nyt.com/images/2009/03/22/arts/22chop_600.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      name: "Ad name 3",
      image:
        "https://staticprintenglish.theprint.in/wp-content/uploads/2025/03/Bollywood-downfall-copy-696x392.jpg",
    },
    {
      name: "Ad name 4",
      image:
        "https://s.studiobinder.com/wp-content/uploads/2020/04/What-is-Bollywood-Featured.jpg",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.moneycontrol.com/static-mcnews/2024/12/20241231124530_yearender.jpg?impolicy=website&width=770&height=431",
    },
    {
      name: "Ad name 6",
      image:
        "https://static.spotboye.com/uploads/Untitled_design_(3)_2024-11-18-7-53-35_thumbnail.jpg",
    },
    {
      name: "Ad name 1",
      image:
        "https://static.toiimg.com/thumb/msid-112645954,width-1280,height-720,resizemode-4/112645954.jpg",
    },
    {
      name: "Ad name 2",
      image:
        "https://kalingatv.com/wp-content/uploads/2025/06/Bollywood-movies-releasing-in-July.jpg",
    },
    {
      name: "Ad name 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt86MmFb2lK3fA7RB1ufsOfqyO4qYbUa3V5w&s",
    },
    {
      name: "Ad name 4",
      image:
        "https://www.shutterstock.com/image-vector/bollywood-indian-cinema-movie-banner-600nw-2524335017.jpg",
    },
    {
      name: "Ad name 5",
      image: "https://i.ytimg.com/vi/OkdpukkVjV4/sddefault.jpg",
    },
    {
      name: "Ad name 3",
      image:
        "https://hawk.live/storage/post-images/eva-elfi-made-an-appearance-at-a-major-esports-tournament-photo-10006.jpg",
    },
    {
      name: "Ad name 6",
      image:
        "https://i.ytimg.com/vi/uv8H92S_9-Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLABwkRBR43tpo8duVJNIhf3iDm6vA",
    },
    {
      name: "Ad name 1",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/96e98f59328bd6f8a93f1c601489e3851527d6a055fa96b9cdad8a14d6025a89._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,847,263,156_kvf21cb47db8d34aa971cd86f57a65cf8d_SX500_FMjpg_.jpg",
    },
    {
      name: "Ad name 2",
      image:
        "https://editorial.rottentomatoes.com/wp-content/uploads/2019/07/RT_300EssentialMovies_600x314.jpg?w=600",
    },
    {
      name: "Ad name 3",
      image:
        "https://hawk.live/storage/post-images/eva-elfi-made-an-appearance-at-a-major-esports-tournament-photo-10006.jpg",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
    {
      name: "Ad name 4",
      image:
        "https://hawk.live/storage/post-images/eva-elfi-named-her-favorite-player-at-the-international-2025-21258.jpg",
    },
    {
      name: "Ad name 5",
      image:
        "https://hawk.live/storage/post-images/eva-elfie-named-her-favorite-dota-2-player-and-its-no-longer-dyrachyo-21250.jpg",
    },
    {
      name: "Ad name 5",
      image:
        "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?w=800",
    },
  ];

  const radius = 560;

  return (
    <div
      style={{
        backgroundImage: "url('./middleCamera.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "#00000029", // important for multiply

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
