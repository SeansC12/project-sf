import Link from "next/link";
import React from "react";
import Header from "../components/Header/Header";
import "../public/callIcon.svg";
import "../public/donateImg.png";
import "../public/helpOthersImg.png";
import "../public/helpYourselfImg.png";
import "../public/learnMoreImg.png";

const cardInfos = [
  {
    title: "Get support if you are feeling down.",
    buttonLabel: "Help yourself",
    imageLink: "helpYourselfImg.png",
    bgColour: "#C6DAF9",
    cardLink: "/GetHelp",
  },
  {
    title: "Learn more about mental illnesses.",
    buttonLabel: "Learn More",
    imageLink: "learnMoreImg.png",
    bgColour: "#AFE9AA",
    cardLink: "/LearnMore",
  },
  {
    title: "Help someone else in need.",
    buttonLabel: "Help others",
    imageLink: "helpOthersImg.png",
    bgColour: "#AFE9AA",
    cardLink: "/OfferHelp",
  },
  {
    title: "Support mental health organisations.",
    buttonLabel: "Donate",
    imageLink: "donateImg.png",
    bgColour: "#C6DAF9",
    cardLink: "/Donate",
  },
];

export default function Home() {
  return (
    <div>
      <Header tab="Home" />
      <main className="h-full font-Inter pb-96 p-10 pt-16 md:p-16 bg-gradient-to-b from-[#DFFFDC] to-[#E5E5DB]">
        <div>
          <p className="text-2xl md:text-5xl font-lora">
            "Not until we are lost, <br />
            do we begin to{" "}
            <strong className="text-green-700">understand ourselves</strong>"
            <br />
          </p>
          <p className="mt-3">- Henry David Thoreau</p>
        </div>
        <div className="flex h-[30vh] rounded-2xl p-2 md:p-10 bg-gradient-to-r from-[#D23737] to-[#DC5858] items-center text-white mt-10">
          <div className="align-top text-lg md:text-4xl w-full leading-normal">
            <strong>
              Need help urgently?
              <br />
              Call the Samaritans of Singapore at{" "}
              <a href="tel:1-767" className="underline">
                1-767
              </a>
            </strong>
          </div>
          {/* <img className="h-32" src="callIcon.svg"></img> */}
        </div>
        <div className="text-center">
          <p className="text-2xl md:text-4xl pt-16 font-bold">
            Explore our options:
          </p>

          <div className="grid md:grid-cols-2 h-fit place-items-center md:w-[80%] gap-7 md:gap-14 m-auto mt-8">
            {cardInfos.map((cardInfo, key) => (
              <div
                key={key}
                className="rounded-2xl w-full h-full text-left p-4 md:p-8 relative"
                style={{ backgroundColor: cardInfo.bgColour }}
              >
                <p className="text-xl sm:text-2xl xl:text-4xl font-lora">
                  {cardInfo.title}
                </p>
                <div className="absolute bottom-8 w-fit">
                  <Link href={cardInfo.cardLink}>
                    <b className="text-sm md:text-xl bg-opacity-10 bg-black cursor-pointer w-fit h-fit py-2 px-6 rounded-full font-Inter">
                      {cardInfo.buttonLabel}
                    </b>
                  </Link>
                </div>
                <img className="w-32 ml-auto" src={cardInfo.imageLink}></img>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
