import React from 'react';

export default function MyComp() {
  return (
    <div className="container">
      <h1 className="page-header">Hellow world!</h1>
      <hr className="my-4" />
      <p className="page-header">
        {' '}
        <mark> Lorem ipsum dolor sit amet</mark> consectetur adipisicing elit.
        Sed repellat amet ab laudantium tempora architecto, repudiandae
        consequuntur inventore, aut nemo similique atque illo, earum alias ex
        aliquid asperiores sint quia
      </p>
      <p>
        <del>Lorem ipsum dolor sit amet consectetur</del> adipisicing elit. Sed
        repellat amet ab laudantium tempora architecto, repudiandae consequuntur
        inventore, aut nemo similique atque illo, earum alias ex aliquid
        asperiores sint quia. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque velit doloribus quaerat libero ab perspiciatis, dicta
        corporis repellendus odit in nisi consectetur exercitationem consequatur
        sunt est dignissimos temporibus voluptas? Temporibus!
      </p>

      <hr />
      {/* alignment exercise */}
      <p class="text-left text-lowercase">left Lorem ipsum</p>
      <p class="text-right text-uppercase">center Phasellus iaculis</p>
      <p class="text-center">right Nulla volutpat</p>
      <p class="text-justify">justified text</p>
      <p class="text-nowrap">no wrap text</p>

      {/* Quick float div */}
      <div className="float-right">Div floated to right</div>
      <div className="float-left">Div floated to left</div>

      {/* Clear float merge */}
      <div className="clearfix"></div>
      <hr />


      
    </div>
  );
}
