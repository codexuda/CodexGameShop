import React from 'react'

const Modificar = () => {
  return (
    <div>
      <h1>Modificar productos</h1>

      <form><center>
        <table width="90%" border="1">
          <tr>
            <th>Codigo del producto: <input type="text" name="name"  value="GGOEAFKA087599" /> <input type="submit" value="Buscar"/> </th>
          </tr>          
            <tr>
            <th><label>Codigo:</label></th>
            <th><label>urlImagen:</label></th>
            <th><label>name:</label></th>
            <th><label>description:</label></th>
            <th><label>features:</label></th>
            <th><label>price:</label></th>
            </tr>
            <tr>
            <th><label>GGOEAFKA087599:</label></th>
            <th><label><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png"/></label></th>
            <th><textarea>Android Large Removable Sticker Sheet:</textarea></th>
            <th><textarea>Show your quirky side by placing these fun Android stickers on your personal belongings.:</textarea></th>
            <th><textarea>Android Stickers-White Colored Sticker Sheet:</textarea></th>
            <th><textarea>2.99:</textarea></th>
            </tr>
        </table></center>
      </form>


    </div>
  )
}

export default Modificar