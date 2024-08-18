import { TextEffect } from "../_components/TextEffect";

export default function TextEffectExamples() {

  return (
    <>
      <h1 className="text-3xl">Text effects</h1>

      <h1 className="text-2xl">Text effect without arguments</h1>
      <p className="mb-3">This is the text effect animation, the text is rendered blurred, but quickly it starts showing to the client

      </p>
      <TextEffect>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloremque hic laborum architecto quis
        fuga, sunt, temporibus consectetur autem error atque mollitia eligendi? Nulla, asperiores.</TextEffect>

      <hr />
      <h1 className="text-2xl">Text effect per character</h1>
      <p className="mb-3">Text effect of one letter of the string being shown one by one

      </p>
      <TextEffect preset="fade">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloremque hic laborum architecto quis
        fuga, sunt, temporibus consectetur autem error atque mollitia eligendi? Nulla, asperiores.</TextEffect>

      <hr />
      <h1 className="text-2xl">Text effect per word</h1>
      <p className="mb-3">Text effect where one word of the string being shown one by one

      </p>
      <TextEffect per="char" preset="fade">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloremque hic laborum architecto quis
        fuga, sunt, temporibus consectetur autem error atque mollitia eligendi? Nulla, asperiores.</TextEffect>

      <hr />

      <h1 className="text-2xl">Text effect wtih preset</h1>
      <p className="mb-3">Text effect where we can customize our effect based on the preset, with the arguments: slide, scale, fade, shake, blur

      </p>
      <TextEffect per="word" as="h3" preset="shake">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut doloremque hic laborum architecto quis
        fuga, sunt, temporibus consectetur autem error atque mollitia eligendi? Nulla, asperiores.</TextEffect>

      <hr />
    </>)
}

