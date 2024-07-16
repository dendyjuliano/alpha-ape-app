import Button from "@src/shared/components/Button";
import { Row, Col, Steps } from "antd";
import {
  ThumbUp,
  Favorite,
  CheckCircle,
  Lock,
  OneK,
  LooksOne,
  LooksOneOutlined,
  LooksOutlined,
} from "@mui/icons-material";
import useBreakpoint from "@src/shared/hooks/useBreakpoint";
import Image from "next/image";

export const CardTokenomic = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="card-feature w-full h-[150px] px-3 bg-[#001366] border-8 border-white rounded-3xl text-[#0051DC] py-6 flex items-center justify-center">
      <p className="text-white text-[20px] text-center w-4/5 z-10">{label}</p>
      <div className="absolute z-0">{children}</div>
    </div>
  );
};
export const RoadMapLists = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-feature w-full px-8 bg-[#0073B0] border-8 border-white rounded-3xl text-[#0051DC] py-6 ">
      <ul className="text-white list-disc max-w-[272px] text-[20px] flex flex-col gap-2">
        {children}
      </ul>
    </div>
  );
};

export default function Home() {
  const { isDekstop } = useBreakpoint();
  const openNewTab = (link: string) => {
    window.open(link, "__blank");
  };

  return (
    <>
      <section className="bg-[url('/assets/background-city-baby-thoshy.png')] bg-no-repeat bg-contain md:h-[860px] flex flex-col items-center justify-center gap-[48px] py-[32px] px-[24px]">
        <div className="grid grid-cols-12 gap-12">
          <div className="flex flex-col  col-span-6">
            <p className="md:text-4hl text-[35px] text-secondary text-stroke text-start">
              ALPHA APE
            </p>
            <p className="md:text-3hl text-[35px] text-white ">
              THE KING OF APES
            </p>
            <p className="md:text-3hl text-[35px] text-white ">
              READY TO TAKE OVER BASE
            </p>
            <div className="mt-6 border-[6px] border-white rounded-[60px] px-4 py-[10px]">
              <p className="md:text-hs text-[35px] text-white">
                CA: 0xac27a4E586a9B279cE63eADD767A0F64Ab4DfD0f
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center col-span-6">
            <Image src="/assets/icon-ape.png" alt="" width={405} height={397} />
          </div>
        </div>

        <div className="flex gap-8">
          <Button
            onClick={() =>
              // eslint-disable-next-line
              openNewTab(process.env.NEXT_PUBLIC_TOSHI_URL as string)
            }
            label="BUY $APE"
            color="secondary"
          />
          <Button
            onClick={() =>
              // eslint-disable-next-line
              openNewTab(process.env.NEXT_PUBLIC_TELEGRAM_URL as string)
            }
            label="JOIN TELEGRAM"
            color="secondary"
          />
          <Button
            onClick={() =>
              // eslint-disable-next-line
              openNewTab(process.env.NEXT_PUBLIC_X_URL as string)
            }
            label="FOLLOW TWITTER"
            color="secondary"
          />
        </div>
        <img src="/assets/btoshicto_bete.svg" alt="" />
      </section>
      <section className="mt-6 flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row justify-center items-center md:h-[860px]">
        <Image src="/assets/banner-ape.jpeg" alt="" width={561} height={253} />
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:max-w-[500px]">
          <div className="flex flex-col">
            <p className="md:text-hm text-[35px] text-secondary text-stroke stroke-primary text-center">
              WHAT IS ALPHA $APE
            </p>
            <p className="md:text-2hl text-[35px] text-secondary text-stroke text-center">
              Welcome to Alpha Ape
            </p>
          </div>
          <p className="text-white text-[18px] md:text-hp text-center">
            Welcome to the world of Alpha Ape, a new and exciting memecoin
            launched on the Base Network through Ape.store. Alpha Ape is all
            about combining the playful spirit of internet memes with the power
            of blockchain technology. It&apos;s designed for everyone, from
            crypto enthusiasts to meme lovers, bringing joy and innovation
            together.
          </p>
          <p className="text-white text-[18px] md:text-hp text-center">
            Immerse yourself in the Alpha $APE ecosystem and get ready for an
            adventure like no other. Whether you&apos;re a meme aficionado, a
            fan of thrilling tales, or simply seeking a unique investment
            opportunity, Alpha $APE extends a warm welcome.
          </p>
        </div>
      </section>
      {/* <div className="relative">
        <section className="">
          <div className="z-10 relative flex py-[32px] px-6 md:px-[60px] w-full md:gap-[200px] justify-center items-center h-full md:flex-row flex-col">
            <div className="flex flex-col gap-6 md:gap-[48px] items-center justify-center md:max-w-[500px]">
              <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
                TOKENOMICS
              </p>
              <p className="text-white text-[18px] md:text-[29px] text-center">
                People think I’m just a Baby but truth be told. I’m kind of a
                Boss Baby
              </p>
              <Row gutter={[24, 24]}>
                <Col md={12} span={24}>
                  <CardTokenomic label="fair App Store launch">
                    <ThumbUp className="text-[96px]" />
                  </CardTokenomic>
                </Col>
                <Col md={12} span={24}>
                  <CardTokenomic label="no taxes">
                    <Favorite className="text-[96px]" />
                  </CardTokenomic>
                </Col>
                <Col md={12} span={24}>
                  <CardTokenomic label="contract renounced">
                    <CheckCircle className="text-[96px]" />
                  </CardTokenomic>
                </Col>
                <Col md={12} span={24}>
                  <CardTokenomic label="liquidity burned">
                    <Lock className="text-[96px]" />
                  </CardTokenomic>
                </Col>
              </Row>
            </div>
            <img src="/assets/icon-ape.png" alt="" />
          </div>
        </section>
      </div> */}
      {/* <section className="flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row  items-center md:h-[860px] relative">
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:max-w-[500px] items-center">
          <div className="flex flex-col">
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              BUY
            </p>
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              BABY TOSHI
            </p>
          </div>
          <p className="text-white text-[18px] md:text-[29px] text-center">
            CMEOW! Say it back!
          </p>
          <Button
            label="BUY $BTOSHI"
            className="w-[200px]"
            onClick={() =>
              // eslint-disable-next-line
              openNewTab(process.env.NEXT_PUBLIC_TOSHI_URL as string)
            }
          />
          <div className="flex flex-col gap-3">
            <p className="text-black text-[18px] md:text-[29px] text-center">
              CA:
            </p>
            <div className="border-8 border-black rounded-full py-[12px] px-[24px] md:w-[400px] w-[300px]">
              <p className="break-words text-center">
                0x3a4ae78ebb5caad5d704c2fdaf19917c203bdfa3
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/btoshicto_gm.png"
          className="w-[712px] absolute bottom-0 right-14 hidden md:block"
          alt=""
        />
      </section> */}
      <section className="flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row  items-center md:h-[860px] relative">
        <div className="z-10 relative flex py-[32px] px-6 md:px-[60px] w-full md:gap-[200px] justify-center items-center h-full md:flex-row flex-col">
          <div className="flex flex-col gap-6 md:gap-[48px] items-center justify-center ">
            <p className="md:text-[53px] text-[35px] text-secondary text-stroke text-center">
              ROAD MAP
            </p>
            <p className="text-white text-[18px] md:text-[26px] text-center">
              Roadmap will continuously change as we progress with our
              project.For news and updates, join our Telegram announcement
              channel
            </p>
            {isDekstop ? (
              <div className="flex w-full gap-4">
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-[#F9B712]">
                      <p className="text-white">1</p>
                    </div>
                    <p className="text-white text-hs w-1/3">PHASE 1</p>
                    <div className="border-b-4 border-[#F9B712] w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Re-create a website</li>
                      <li>New X account</li>
                      <li>
                        Create a new design for banner,logo,icon on dex profile
                      </li>
                      <li>New mw</li>
                    </RoadMapLists>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-[#F9B712]">
                      <p className="text-white">2</p>
                    </div>
                    <p className="text-white text-hs w-1/3">Phase 2</p>
                    <div className="border-b-4 border-[#F9B712] w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Claim CTO and update dex profile</li>
                      <li>Base trending</li>
                      <li>Active on social media (ex: X & telegram)</li>
                      <li>Get another investors</li>
                    </RoadMapLists>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-[#F9B712]">
                      <p className="text-white">3</p>
                    </div>
                    <p className="text-white text-hs w-1/3">Phase 3</p>
                    <div className="border-b-4 border-[#F9B712] w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Create stickers for the main character</li>
                      <li>Collab with influencer</li>
                      <li>Create an NFT ALPHA APE</li>
                      <li>Listing in some platform (Base fun,CG, CMC,CB)</li>
                    </RoadMapLists>
                  </div>
                </div>
              </div>
            ) : (
              <Steps
                direction="vertical"
                current={2}
                items={[
                  {
                    icon: <p className="text-[16px] py-1 text-white">1</p>,

                    title: <p className="text-white">Q2</p>,
                    description: (
                      <RoadMapLists>
                        <li>Create a website</li>
                        <li>
                          Create new design for banner, logo, icon on dex
                          profile
                        </li>
                        <li>Funds to update dex profile</li>
                        <li>Funds to pay dex ads</li>
                      </RoadMapLists>
                    ),
                  },
                  {
                    icon: <p className="text-[16px] py-1 text-white">2</p>,
                    title: <p className="text-white">Q3</p>,
                    description: (
                      <RoadMapLists>
                        <li>Funds to pay base trending</li>
                        <li>️Post for new social media</li>
                        <li>Get more investors</li>
                        <li>Create stickers for bitoshi</li>
                        <li>
                          Interact with influencers to promote our project
                        </li>
                        <li>Create NFT for our project</li>
                      </RoadMapLists>
                    ),
                  },
                  {
                    icon: <p className="text-[16px] py-1 text-white">3</p>,
                    title: <p className="text-white">Q4</p>,
                    description: (
                      <RoadMapLists>
                        <li>Listing on CoinGecko</li>
                        <li>Listing on CoinMarketcap</li>
                        <li>Listing on exchange</li>
                      </RoadMapLists>
                    ),
                  },
                  {
                    icon: <p>{null}</p>,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </section>
      <section className="flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] gap-[48px] justify-center flex-col-reverse md:flex-row  items-center md:h-[860px] relative">
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:w-[700px] items-center">
          <div className="flex flex-col">
            <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
              SOCIALS
            </p>
          </div>
          <p className="text-white text-[18px] md:text-[29px] text-center">
            Join the $APE community
          </p>
          <p className="text-white text-[18px] md:text-[29px] text-center">
            Its time for On Chain Summer
          </p>
          <div className="flex gap-[48px]">
            <img
              src="/assets/logo-x.svg"
              alt="x"
              className="cursor-pointer"
              onClick={() =>
                // eslint-disable-next-line
                openNewTab(process.env.NEXT_PUBLIC_X_URL as string)
              }
            />
            <img
              src="/assets/logo-telegram.svg"
              alt="telegram"
              className="cursor-pointer"
              onClick={() =>
                // eslint-disable-next-line
                openNewTab(process.env.NEXT_PUBLIC_TELEGRAM_URL as string)
              }
            />
          </div>
        </div>
        <Image
          src="/assets/king-ape.jpeg"
          className="w-[397px] h-[397px] hidden md:block border-2 border-secondary rounded-[32px]"
          width={397}
          height={397}
          alt=""
        />
      </section>
    </>
  );
}
