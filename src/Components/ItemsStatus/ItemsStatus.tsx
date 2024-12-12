/* eslint-disable @next/next/no-img-element */
//AQUI FICA O NAV STATUS

// AQUI FICA O CSS

import "./ItemsStatus.css";

function ItemsStatus() {
 
  return (
    <>
      <section className="status_container">
        {/* AQUI FICA O ARRAY DE CARD STATUS */}
        <div className="container_items" >
          <div className="line"></div>

          <div className="cards_status">
            <div className="div_bk_item  items_time_line first-item"  >
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 1</p>
           
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line" >
              <img src="/Vector.webp" alt="Image status"  />
            </div>
            <p>Item 2</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 3</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 4</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 5</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 6</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 7</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 8</p>
          </div>
          <div className="cards_status">
            <div className="div_bk_item  items_time_line">
              <img src="/Vector.webp" alt="Image status" />
            </div>
            <p>Item 9</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemsStatus;
