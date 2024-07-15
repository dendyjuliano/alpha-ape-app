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
    <div className="card-feature w-full px-8 bg-[#001366] border-8 border-white rounded-3xl text-[#0051DC] py-6 ">
      <ul className="text-white list-disc max-w-[272px] flex flex-col gap-2">
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
      <section className="bg-[url('/assets/background-city-baby-thoshy.png')] bg-no-repeat bg-contain md:h-[860px] bg-primary flex flex-col items-center justify-center gap-[55px] py-[32px] px-[24px]">
        <div className="flex flex-col items-center">
          <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
            WELCOME TO
          </p>
          <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
            BABY TOSHI’S
          </p>
          <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
            WORLD
          </p>
        </div>
        {/* <Button label="GET AIR DROP" color="secondary" /> */}
        <img src="/assets/btoshicto_bete.svg" alt="" />
      </section>
      <section className="bg-secondary-gradient flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row justify-center items-center md:h-[860px]">
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:max-w-[500px]">
          <div className="flex flex-col">
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              THE STORY OF
            </p>
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              BABY TOSHI
            </p>
          </div>
          <p className="text-black text-[18px] md:text-[29px] text-center">
            Wassup, i’m Baby Toshi you probably know my dad, the face of Base.
          </p>
          <p className="text-black text-[18px] md:text-[29px] text-center">
            My dad is pretty humble, but i’m still a baby so i am allowed to
            ball out a litle sometimes.
          </p>
        </div>
        <img src="/assets/btoshicto_money.svg" alt="" />
      </section>
      <div className="relative">
        <section className="bg-opacity-blue bg-[url('/assets/bg-social-media.jpg')] md:h-[860px] bg-cover bg-no-repeat">
          <div className="z-10 relative flex py-[32px] px-6 md:px-[60px] w-full md:gap-[200px] justify-center items-center h-full md:flex-row flex-col">
            <div className="flex flex-col gap-6 md:gap-[48px] items-center justify-center md:max-w-[500px]">
              <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
                TOKENOMICS
              </p>
              <p className="text-black text-[18px] md:text-[29px] text-center">
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
            <img src="/assets/btoshicto_office.png" alt="" />
          </div>
        </section>
      </div>
      <section className="bg-secondary-gradient flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row  items-center md:h-[860px] relative">
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:max-w-[500px] items-center">
          <div className="flex flex-col">
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              BUY
            </p>
            <p className="md:text-hs text-[35px] text-primary text-stroke text-center">
              BABY TOSHI
            </p>
          </div>
          <p className="text-black text-[18px] md:text-[29px] text-center">
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
      </section>
      <section className="bg-opacity-blue bg-[url('/assets/bg-social-media.jpg')] flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] flex-col md:flex-row  items-center md:h-[860px] relative">
        <div className="z-10 relative flex py-[32px] px-6 md:px-[60px] w-full md:gap-[200px] justify-center items-center h-full md:flex-row flex-col">
          <div className="flex flex-col gap-6 md:gap-[48px] items-center justify-center ">
            <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
              ROAD MAP
            </p>
            <p className="text-black text-[18px] md:text-[29px] text-center">
              Launching Website, Community Engagement, Token Utility
              Integration, Exchange Listings, Expanding Partnershhips, And
              Global Adoption.
            </p>
            {isDekstop ? (
              <div className="flex w-full gap-4">
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-secondary">
                      <p className="text-white">1</p>
                    </div>
                    <p className="text-white text-hm">Q2</p>
                    <div className="border-b-4 border-secondary w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Create a website</li>
                      <li>
                        Create new design for banner, logo, icon on dex profile
                      </li>
                      <li>Funds to update dex profile</li>
                      <li>Funds to pay dex ads</li>
                    </RoadMapLists>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-secondary">
                      <p className="text-white">2</p>
                    </div>
                    <p className="text-white text-hm">Q3</p>
                    <div className="border-b-4 border-secondary w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Funds to pay base trending</li>
                      <li>️Post for new social media</li>
                      <li>Get more investors</li>
                      <li>Create stickers for bitoshi</li>
                      <li>Interact with influencers to promote our project</li>
                      <li>Create NFT for our project</li>
                    </RoadMapLists>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full items-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-secondary">
                      <p className="text-white">3</p>
                    </div>
                    <p className="text-white text-hm">Q4</p>
                    <div className="border-b-4 border-secondary w-full" />
                  </div>
                  <div className="pl-10">
                    <RoadMapLists>
                      <li>Listing on CoinGecko</li>
                      <li>Listing on CoinMarketcap</li>
                      <li>Listing on exchange</li>
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
      <section className="bg-primary-gradient flex py-[24px] md:px-[60px] px-[24px] md:gap-[166px] gap-[48px] justify-center flex-col-reverse md:flex-row  items-center md:h-[860px] relative">
        <div className="flex flex-col gap-[32px] md:gap-[48px] md:w-[700px] items-center">
          <div className="flex flex-col">
            <p className="md:text-hs text-[35px] text-secondary text-stroke text-center">
              SOCIALS
            </p>
          </div>
          <p className="text-white text-[18px] md:text-[29px] text-center">
            Join the $BTOSHI community
          </p>
          <p className="text-white text-[18px] md:text-[29px] text-center">
            Its time for On Chain Summer
          </p>
          <Button
            label="BUY $BTOSHI"
            className="w-[200px]"
            onClick={() =>
              // eslint-disable-next-line
              openNewTab(process.env.NEXT_PUBLIC_TOSHI_URL as string)
            }
          />
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
        <p className="md:text-[112px] text-[42px] text-secondary text-stroke text-center">
          CRYPTO SUMMER
        </p>
        <img
          src="/assets/btoshicto_cool.png"
          className="absolute bottom-0 right-14 hidden md:block"
          alt=""
        />
      </section>
    </>
  );
}
