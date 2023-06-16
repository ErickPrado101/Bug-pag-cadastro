function salvar() {
    var tabela = document.getElementById("tabela");
    var linhas = tabela.rows;
    var matriz = []; 
    
    for (var i = 1; i < linhas.length; i++) {
      var colunas = linhas[i].cells;
      var valores = [];
  
      
      for (var j = 1; j < colunas.length; j++) {
        valores.push(colunas[j].textContent);
      }
  
      matriz.push(valores);
    }  
    var doc = new jsPDF(); 
 
    var config = {
      head: [['Dia/Semana', '6h-8h', '8h-10h', '10h-12h', '12h-14h', '14h-16h', '16h-18h', '18h-20h']],
      body: matriz
    };  
    doc.autoTable(config);  
    doc.save("tabela.pdf");
  }