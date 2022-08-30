function search(){
    var ip=document.getElementById('ipval').value
    var res = document.getElementById('ipres')

    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_OFnlCij4ZAGvVzhljsQb1PJ63BZ0v&ipAddress=${ip}`)
    .then(response => response.json())
    .then(data => {
        const {country,ip,location,as,region,timezone,name,isp} = data;

        const output = `
        <br>
        <label>IP</label>
        <br>
        <span>${ip}</span>
        <br>
        <br>
        <label>Localização</label>
        <br>
        <span>${location.region},${location.country}</span>
        <br>
        <br>
        <label>Fuso Horario</label>
        <br>
        <span>${location.timezone}</span>
        <br>
        <br>
        <label>Provedor</label>
        <br>
        <span>${isp}</span>
        <br>
        <br>
        <label>Nome</label>
        <br>
        <span>${as.name}</span>
        <br>
        <br>
        `
        res.style.opacity='1'
        res.innerHTML=output

    })




}    