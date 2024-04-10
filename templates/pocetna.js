document.addEventListener('DOMContentLoaded', function(){
    const select = document.querySelector('#news');
    const para = document.querySelector('#p');

    select.addEventListener("change", setNews);

    function setNews(){
        const choice = select.value;

        switch(choice){
            case choice = "fudbal":
                para.textContent = 
                    "Osmog aprila meč Superkupa Saudijske Arabije igrali su Al-Nassr i Al-Hilal. Cristiano Ronaldo ponovo je bio očajan protiv ljutog rivala, te je pred kraj meča dobio i crveni karton. Naime, Portugalac je prvo udario protivničkog igrača, za šta je opravdano dobio crveni karton. Nakon toga smo vidjeli i kako je iza leđa sudije zatvorio pesnicu.Htio je očigledno Portugalac pogoditi sudiju loptom koja mu je bila u rukama. To bi izazvalo još veći skandal jer bi bilo kakvo udaranje sudije bilo neoprostivo bilo kome, pa i Ronaldu.";
                break;
            
            case choice = "odbojka":
                para.textContent =
                    "Odbojkašice Jedinstva iz Stare Pazove slavile su na domaćem terenu protiv Crvene zvezde rezultatom 3:1 (25:23, 25:22,22:25,25:19 ) u prvoj utakmici polufinalne serije Superlige Srbije.";
                break;
            case choice = "kosarka":
                para.textContent = 
                    "Ako kosarkasi partizana dana 11 aprila u Beogradu slave protiv Valencie, a Crvena Zvezda pbijedi Efes, Partizan ide u doigravanje za final fore";
                break;
            case choice = "rukomet":
                text.textContent =
                    "Rukometasi MRK SLOGE iz Doboja gostuju ekipi RK GRACANICE iz Gracanice u subotu 14 aprila sa pocetkom u 17h.";
                break;
            default:
                para.textContent = ""
        }
    }
});