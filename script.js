const inputNama = document.getElementById("InputTP");
const inputNominal = document.getElementById("NominalHarga");
const btnSimpan = document.getElementById("btnSimpan");
const pesanPeringatan = document.getElementById("pesanPeringatan");
const badgeTotalPesan = document.getElementById("badgeDaftarPengeluaran");
const listPengeluaran = document.getElementById("listPengeluaran");

let dataPengeluaran = JSON.parse(localStorage.getItem('dataPengeluaran')) || [];

function SimpanData() {
    localStorage.setItem('dataPengeluaran', JSON.stringify(dataPengeluaran));
}
btnSimpan.addEventListener('click', function () {
    const nama = inputNama.value.trim();
    const nominal = inputNominal.value.trim();

    if (nama === "" || !nominal || nominal <= 0) {
        pesanPeringatan.classList.remove("d-none");
    } else {
        pesanPeringatan.classList.add("d-none");
        dataPengeluaran.push({
            nama: nama,
            nominal: nominal
        });
        SimpanData();
        tampilkanData();
        inputNama.value = "";
        inputNominal.value = "";
    }
});

function tampilkanData() {
    listPengeluaran.innerHTML = "";
    let total = 0;

    dataPengeluaran.forEach(function (item){
        total += Number(item.nominal)

        listPengeluaran.innerHTML += `
        <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                <span>${item.nama}</span>
                <span class="fw-semibold">Rp ${Number(item.nominal).toLocaleString("id-ID")}</span>
            </div>`;       
    });
    badgeTotalPesan.textContent = `Rp ${total.toLocaleString("id-ID")}`;
}
tampilkanData();


