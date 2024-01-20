import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">want to learn more about JavaScript and etc?</h2>
        <p className="text-gray-500 my-2">Checkout these resources with 50+ JavaScript Projects and etc</p>
        <Button gradientDuoTone='purpleToPink' className="rounded-tl-xl rounded-bl-none"><a href="https://github.com/codewithrk7/" target="_blank" rel="noopener noreferrer">50+ programming Projects</a></Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://www.everisschool.com/wp-content/uploads/2020/11/que-es-javascript-banner-post.png" />
      </div>
    </div>
  )
}
