let link = document.querySelector(".link-youtube"),
			time = 10,
			params = new URLSearchParams(location.search),
			id = params.get('id'),
			idLink = params.get('idLink'),
			linkYoutube = params.get("linkYoutube"),
			$linkYoutube = document.createElement("a");
		$linkYoutube.setAttribute("target", "_blanck"),
		count = 60;

		//	link.href = `https://moneydrop.vercel.app/verify/?id=${id}&idlink=${idLink}`;
		link.style.pointerEvents = 'none';

		const interval = setInterval(function() {
			document.querySelector(".text span").innerHTML = time
					link.href = linkYoutube;

			if (time <= 0) {
				link.style.pointerEvents = null;
				link.classList.add("active");
				clearInterval(interval);
				document.querySelector("p").innerHTML = "El enlace ya esta listo";
				link.addEventListener("click", (e) => {
					let ls = localStorage,
						fecha = new Date();
					//https://moneydrop-verify.vercel.app/videos/video+1/?idLink=fq6csuvtbg4&linkYoutube=https://youtu.be/YkT7G623SxI
					if (ls.getItem("timeSec") == null || ls.getItem("timeSec") == "") {
						ls.setItem("timeSec", fecha.getSeconds());
					}

					let timeNew = ls.getItem("timeSec");
					time = timeNew;
					let counterSec = setInterval(() => {
						time++
						ls.setItem("timeSecElapsed", time);
						document.querySelector(".text span").innerHTML = count--
						if (parseInt(ls.getItem("timeSecElapsed")) >= parseInt(ls.getItem("timeSec")) + 60) {
							e.target.textContent = "Recompensa";
							ls.setItem("timeSecElapsed", "");
							ls.setItem("timeSec", "");
							link.setAttribute("target", "")
							link.href = `https://moneydrop.vercel.app/verify/?id=${id}&idlink=${idLink}` ;
							clearInterval(counterSec);
						} else {
							e.target.textContent = "Video en curso... "
						}

					}, 1000);



				})
			}
			time--
		}, 1000);
