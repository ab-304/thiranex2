function startScan() {

    const website =
        document.getElementById("website").value;

    const scanAnimation =
        document.getElementById("scanAnimation");

    const results =
        document.getElementById("results");


    if (website === "") {

        alert("Please enter a website URL");

        return;
    }


    // SHOW SCAN

    scanAnimation.style.display = "block";

    results.style.display = "none";


    // FAKE SCAN DELAY

    setTimeout(() => {

        scanAnimation.style.display = "none";

        results.style.display = "block";


        // HTTPS CHECK

        if (website.startsWith("https")) {

            document.getElementById("httpsResult")
            .innerText =
            "Secure HTTPS connection detected.";

        }

        else {

            document.getElementById("httpsResult")
            .innerText =
            "Website is not using HTTPS.";
        }


        // RANDOM OPEN PORT RESULT

        const ports = [
            "No dangerous ports detected.",
            "Port 21 is open.",
            "Port 8080 detected.",
            "Multiple open ports found."
        ];

        const randomPort =
            ports[Math.floor(Math.random() * ports.length)];

        document.getElementById("portResult")
        .innerText = randomPort;


        // RANDOM SOFTWARE RESULT

        const software = [
            "Software version is updated.",
            "Outdated Apache server detected.",
            "Old PHP version detected.",
            "Potential outdated CMS found."
        ];

        const randomSoftware =
            software[Math.floor(Math.random() * software.length)];

        document.getElementById("softwareResult")
        .innerText = randomSoftware;


        // RANDOM SCORE

        const score =
            Math.floor(Math.random() * 40) + 60;

        document.getElementById("score")
        .innerText =
        `Security Score: ${score}/100`;

    }, 2500);

}