// Manipulate all screen functions
const CONTENT_ID = "conteudo"
class Screen {

    static returnHtmlCode(item) {
        return `
            <div class="col-md-3">
                <div class="card" style="width: 50%;">
                 <img name="${item.name}" src="${item.img}" class="card-img-top" alt="..." />
                </div>
                <br />
            </div>            
        `
    }

    static changeHtmlContent(htmlCode) {
        let putOnHtml = document.getElementById(CONTENT_ID);
        //putOnHtml.innerText = htmlCode;
        putOnHtml.innerHTML = htmlCode;
    }


    static generateStringHTMLByImage(data) {
        // to each item in the list, will listening the function returnHtmlCode()
        // And in the end, will put all returned to a String
        // Switch Arrary to String
        return data.map(Screen.returnHtmlCode).join('')
    }

    static updateImages(itens) {
        const htmlCode = Screen.generateStringHTMLByImage(itens)
        Screen.changeHtmlContent(htmlCode)
    }
}