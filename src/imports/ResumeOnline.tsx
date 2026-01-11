import svgPaths from "./svg-mqbbx6jpkj";
import imgImage from "figma:asset/2f1a3482c4931069e6c37f90b39ed109fe2ee445.png";
import imgImage2 from "figma:asset/d1f7cf4e8b0959b6f3b893b01284992afdaa13eb.png";
import imgImage1 from "figma:asset/9521fcebcd207ea109fa3d5bf2f2c2ea80993ccb.png";
import imgImage6 from "figma:asset/3789b85fe5e6f795f04583fca7414b7ce7f52eba.png";
import imgImage3 from "figma:asset/eefd72b63b9abf7c32c2229177cdb164a3665eb5.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Medium',_sans-serif] font-medium gap-1.5 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0 text-[#2e2e48] text-[30px] tracking-[-0.6px] w-full">
        <p className="leading-[40px]">Vinay Singh Chouhan</p>
      </div>
      <div className="bg-clip-text bg-gradient-to-r from-[#a478e8] relative shrink-0 text-[21px] to-[#516cf7] tracking-[0.21px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[32px]">Design-Centric Frontend Designer</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Text />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-center relative shrink-0 w-full" data-name="Header">
      <div className="bg-center bg-cover bg-no-repeat rounded-[200px] shrink-0 size-[157px]" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <Header />
    </div>
  );
}

function EditDoubleQuotesL() {
  return (
    <div className="relative shrink-0 size-5" data-name="edit/double_quotes_l">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="edit/double_quotes_l">
          <g id="Icon">
            <path d={svgPaths.p116a5400} fill="#79819A" />
            <path d={svgPaths.p2c82280} fill="#79819A" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrap() {
  return (
    <div className="absolute h-[21.167px] left-[154.33px] top-[47px] w-[19.667px]" data-name="Wrap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
        <g id="Wrap">
          <g id="Icon">
            <path d={svgPaths.pf388600} fill="var(--fill-0, #79819A)" />
            <path d={svgPaths.p9083280} fill="var(--fill-0, #79819A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0 w-full">
      <EditDoubleQuotesL />
      <div className="basis-0 font-['Outfit:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47516b] text-[18px] tracking-[0.36px]">
        <p className="leading-[24px]">From concept to reality: Prototyping with Figma to turn visions into user-ready products.</p>
      </div>
      <Wrap />
    </div>
  );
}

function Quotes() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full" data-name="Quotes">
      <Frame9 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border-[#e2e6ee] border-[14px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BasicMail() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basic/mail">
          <path d={svgPaths.p35f7c680} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-8" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[200px]" data-name="Rectangle" />
      <BasicMail />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Email</p>
      </div>
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] w-full" href="mailto:vinaysinghchouhan2@gmail.com" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[18px] underline">vinaysinghchouhan2@gmail.com</p>
      </a>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon />
      <Text1 />
    </div>
  );
}

function BasicLink02() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/link_02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basic/link_02">
          <path d={svgPaths.pc2e1fb0} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon1() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-8" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[200px]" data-name="Rectangle" />
      <BasicLink02 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Linkedin</p>
      </div>
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] w-full" href="https://www.linkedin.com/in/vinay-singh-chouhan" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[18px] underline">https://www.linkedin.com/in/vinay-singh-chouhan</p>
      </a>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon1 />
      <Text2 />
    </div>
  );
}

function BasicPhone() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basic/phone">
          <path d={svgPaths.p2afa0680} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon2() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-8" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[200px]" data-name="Rectangle" />
      <BasicPhone />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Phone</p>
      </div>
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] w-full" href="tel:8561058866" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[18px] underline">(+91) 8561058866</p>
      </a>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon2 />
      <Text3 />
    </div>
  );
}

function BasicLocation() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/location">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basic/location">
          <path d={svgPaths.p35b2ad90} fill="var(--fill-0, #79819A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon3() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-8" data-name="Featured icon">
      <div className="absolute bg-[#e2e6ee] inset-0 rounded-[200px]" data-name="Rectangle" />
      <BasicLocation />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Address</p>
      </div>
      <div className="font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">G1 35, Suraj Nagar, Kalwar Road, Jaipur</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon3 />
      <Text4 />
    </div>
  );
}

function Infos() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="Infos">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Contact Information</p>
      </div>
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">2014-1017</p>
      </div>
      <div className="font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Master of Computer Application</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-8" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px]" style={{ fontVariationSettings: "'opsz' 14", width: "min-content" }}>
        <p className="leading-[16px]">2011-1014</p>
      </div>
      <div className="font-['DM_Sans:Medium',_sans-serif] font-medium relative shrink-0 text-[#47516b] text-[14px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] whitespace-pre">Bachelor of Computer Application</p>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-8" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <Text6 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="Socials">
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#79819a] text-[12px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16px]">Education</p>
      </div>
      <Row4 />
      <Row5 />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start px-[38px] py-[60px] relative self-stretch shrink-0 w-[406px]" data-name="Container">
      <Header1 />
      <Quotes />
      <Divider />
      <Infos />
      <Divider />
      <Socials />
    </div>
  );
}

function Divider2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-px" data-name="Divider">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative self-stretch shrink-0" data-name="Step icon wrap">
      <Divider2 />
    </div>
  );
}

function ContentTitle() {
  return (
    <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0" data-name="content-title">
      <div className="font-['Outfit:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2e2e48] text-[20px] text-center text-nowrap tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">Design Skills</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">User Research and Analysis</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Empathy Maps</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">User Personas</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Wireframing</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Interaction Design</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Information Architecture</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">{`Design System `}</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Figma Prototyping</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Basic Adobe</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Storyboarding</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Journey Mapping</p>
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-start flex flex-wrap gap-3 items-start justify-start relative shrink-0 w-full" data-name="labels">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
    </div>
  );
}

function Techs() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="techs">
      <ContentTitle />
      <Labels />
    </div>
  );
}

function ContentTitle1() {
  return (
    <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0" data-name="content-title">
      <div className="font-['Outfit:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2e2e48] text-[20px] text-center text-nowrap tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">Development Skills</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Webflow</p>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">HTML and Semantic Markup</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">PUG Templating</p>
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">CSS3</p>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">SASS</p>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">ITCSS</p>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">{`Basic JavaScript and  jQuery`}</p>
      </div>
    </div>
  );
}

function Label18() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Basic GASP</p>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Basic Github</p>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Collaborate with the frontend team</p>
      </div>
    </div>
  );
}

function Labels1() {
  return (
    <div className="content-start flex flex-wrap gap-3 items-start justify-start relative shrink-0 w-full" data-name="labels">
      <Label11 />
      <Label12 />
      <Label13 />
      <Label14 />
      <Label15 />
      <Label16 />
      <Label17 />
      <Label18 />
      <Label19 />
      <Label20 />
    </div>
  );
}

function Techs1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="techs">
      <ContentTitle1 />
      <Labels1 />
    </div>
  );
}

function Contents() {
  return (
    <div className="content-stretch flex gap-[100px] items-start justify-start relative shrink-0 w-full" data-name="contents">
      <Techs />
      <Techs1 />
    </div>
  );
}

function ContentTitle2() {
  return (
    <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0" data-name="content-title">
      <div className="font-['Outfit:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2e2e48] text-[20px] text-center text-nowrap tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">Core Competencies</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Problem Solver</p>
      </div>
    </div>
  );
}

function Label22() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Innovative Thinker</p>
      </div>
    </div>
  );
}

function Label23() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Team Player</p>
      </div>
    </div>
  );
}

function Label24() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Detail-Oriented</p>
      </div>
    </div>
  );
}

function Label25() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Strategic Planner</p>
      </div>
    </div>
  );
}

function Label26() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Collaborative Leader</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Open-Minded</p>
      </div>
    </div>
  );
}

function Label28() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Creative Visionary</p>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">User-Centric Approach</p>
      </div>
    </div>
  );
}

function Label30() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Process Improvement</p>
      </div>
    </div>
  );
}

function Label31() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Presentation Skills</p>
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Multitasker</p>
      </div>
    </div>
  );
}

function Label33() {
  return (
    <div className="bg-slate-100 box-border content-stretch flex gap-8 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[6px] shrink-0" data-name="label">
      <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-nowrap text-slate-500">
        <p className="leading-[normal] whitespace-pre">Patience</p>
      </div>
    </div>
  );
}

function Labels2() {
  return (
    <div className="content-start flex flex-wrap gap-3 items-start justify-start relative shrink-0 w-full" data-name="labels">
      <Label21 />
      <Label22 />
      <Label23 />
      <Label24 />
      <Label25 />
      <Label26 />
      <Label27 />
      <Label28 />
      <Label29 />
      <Label30 />
      <Label31 />
      <Label32 />
      <Label33 />
    </div>
  );
}

function Techs2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-5 grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="techs">
      <ContentTitle2 />
      <Labels2 />
    </div>
  );
}

function Contents1() {
  return (
    <div className="content-stretch flex gap-[100px] items-start justify-start relative shrink-0 w-full" data-name="contents">
      <Techs2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Bookkeeping and Accounting Firm</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">A web application that allows you to track the heartbeat and results of your firm in real-time.</p>
      </div>
    </div>
  );
}

function BrandFigma() {
  return (
    <div className="absolute inset-[18.75%]" data-name="brand/Figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="brand/Figma">
          <path d={svgPaths.p39076c00} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon4() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BrandFigma />
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] text-nowrap" href="https://www.figma.com/proto/7BqjlXJ2f0tMP21Y1XSP5i/Tenant-Portal-UI?node-id=636-21453&p=f&t=AfrF918oYLfRUd6Q-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A210&starting-point-node-id=636%3A21453" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline whitespace-pre">Prototype Link</p>
      </a>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon4 />
      <Text8 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text7 />
          <Row6 />
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Project">
      <Content />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Saudi Arabia pavilion (Expo 2025)</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">{`This highlights the Kingdom's rich traditions and ancient culture while showcasing its aspirations for a shared future.`}</p>
      </div>
    </div>
  );
}

function BrandFigma1() {
  return (
    <div className="absolute inset-[18.75%]" data-name="brand/Figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="brand/Figma">
          <path d={svgPaths.p39076c00} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon5() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BrandFigma1 />
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] w-full" href="https://www.figma.com/proto/gIVrpsAsKaZCjR70LgW8vR/Homepage?node-id=101-1838&t=dxPJcLH0U6Oc5wtt-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=101%3A1838" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Prototype Link</p>
      </a>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon5 />
      <Text10 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text9 />
          <Row7 />
        </div>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Project">
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-2.5 h-[166px] items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Project />
      <Project1 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Ponting Wines, Australia</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">{`Cricketer Ricky Ponting and winemaker Ben Riggs craft high-quality wines celebrating Ricky's life and excellence.`}</p>
      </div>
    </div>
  );
}

function BrandFigma2() {
  return (
    <div className="absolute inset-[18.75%]" data-name="brand/Figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="brand/Figma">
          <path d={svgPaths.p39076c00} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon6() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BrandFigma2 />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] text-nowrap" href="https://www.figma.com/proto/vXPItwhBXTuV5O0sCXIC7B/Home-page?node-id=818-96827&starting-point-node-id=818%3A96827&scaling=scale-down&t=bsm4S8kumJK7yKcS-1" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline whitespace-pre">Prototype Link</p>
      </a>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon6 />
      <Text12 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text11 />
          <Row8 />
        </div>
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Project">
      <Content3 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Trainer4you</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Trainer4You is a leading Finnish company in personal training, training new trainers and offering wellness services to businesses.</p>
      </div>
    </div>
  );
}

function BrandFigma3() {
  return (
    <div className="absolute inset-[18.75%]" data-name="brand/Figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="brand/Figma">
          <path d={svgPaths.p39076c00} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon7() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BrandFigma3 />
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] w-full" href="https://www.figma.com/proto/JVWgaSQpJu54TCiySWh1ld/Web-UI---Master?node-id=268-30&starting-point-node-id=268%3A30&scaling=scale-down-width&content-scaling=fixed&t=ZOEAKmbjvC4mycwS-1" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Prototype Link</p>
      </a>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon7 />
      <Text14 />
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text13 />
          <Row9 />
        </div>
      </div>
    </div>
  );
}

function Project3() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Project">
      <Content4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-2 h-[166px] items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Project2 />
      <Project3 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Webflow Project - IotCorner</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">At iotCorner.cloud, we lead the IoT evolution with innovative solutions in product design, consulting, and specialized services.</p>
      </div>
    </div>
  );
}

function BasicLink3() {
  return (
    <div className="absolute inset-[18.75%]" data-name="basic/link_02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="basic/link_02">
          <path d={svgPaths.p13c900} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon8() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BasicLink3 />
    </div>
  );
}

function Text16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="[white-space-collapse:collapse] block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] text-nowrap" href="https://iotcorner-7ba99a1984567ff411cab115550cc.webflow.io/" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline whitespace-pre">Website Link</p>
      </a>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon8 />
      <Text16 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text15 />
          <Row10 />
        </div>
      </div>
    </div>
  );
}

function Project4() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Project">
      <Content6 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2e2e48] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[20px]">Web Product - Company Warehouse</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#79819a] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Introducing WareHouse: Your all-in-one solution. Get everything you need in one place.</p>
      </div>
    </div>
  );
}

function BrandFigma4() {
  return (
    <div className="absolute inset-[18.75%]" data-name="brand/Figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="brand/Figma">
          <path d={svgPaths.p39076c00} fill="var(--fill-0, #516CF7)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedIcon9() {
  return (
    <div className="overflow-clip relative rounded-[200px] shrink-0 size-6" data-name="Featured icon">
      <div className="absolute bg-[#e1e7fe] inset-0" data-name="Rectangle" />
      <BrandFigma4 />
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <a className="block font-['DM_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#516cf7] text-[16px] w-full" href="https://www.figma.com/proto/XyyzKToAJqRd0lZUjkCBz8/Memorres-Warehouse---UI?node-id=77-384&t=QBhqoiRnj573orwd-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=77%3A384" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid leading-[20px] underline">Prototype Link</p>
      </a>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full" data-name="Row">
      <FeaturedIcon9 />
      <Text18 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Text17 />
          <Row11 />
        </div>
      </div>
    </div>
  );
}

function Project5() {
  return (
    <div className="basis-0 bg-[#f7f9fc] content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px overflow-clip relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Project">
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-2 h-[166px] items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Project4 />
      <Project5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
      <Content2 />
      <Content5 />
      <Content8 />
    </div>
  );
}

function LatestProjectsSection() {
  return (
    <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0 w-full" data-name="Latest projects section">
      <div className="font-['Outfit:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2e2e48] text-[20px] text-center text-nowrap tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">Latest projects</p>
      </div>
      <Frame12 />
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start justify-start relative self-stretch shrink-0 w-[707px]" data-name="skills-section">
      <Contents />
      <Contents1 />
      <LatestProjectsSection />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-start p-[38px] relative w-full">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Container />
      <StepIconWrap />
      <Container1 />
    </div>
  );
}

function Divider3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Divider">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e6ee] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function StepIconWrap1() {
  return (
    <div className="content-stretch flex flex-col h-px items-center justify-start relative shrink-0 w-full" data-name="Step icon wrap">
      <Divider3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Medium',_sans-serif] font-medium gap-2.5 items-center justify-start leading-[0] relative shrink-0 text-[#2e2e48] text-[14px] text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">Memorres Digital Pvt Ltd</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">(6 Year)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">{`(2017  - Present)`}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="font-['Outfit:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#2e2e48] text-[20px] text-center text-nowrap tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">Experience</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">{`Web & Graphics Designer`}</p>
      </div>
    </div>
  );
}

function CompanyAndRole() {
  return (
    <div className="content-stretch flex gap-4 h-full items-center justify-start relative shrink-0" data-name="Company and role">
      <div className="bg-center bg-cover bg-no-repeat rounded-[21.111px] shrink-0 size-10" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <Content9 />
    </div>
  );
}

function DateAndPlace() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Date and place">
      <div className="flex flex-row items-center self-stretch">
        <CompanyAndRole />
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47516b] text-[10px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Jan 2017 - Jan 2018</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative rounded-[8px] shrink-0 w-full" data-name="Experience">
      <DateAndPlace />
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px pb-4 pt-1.5 px-0 relative self-stretch shrink-0" data-name="Content">
      <Experience />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">After completing my MCA, I began my journey as a web designer at Memorres. During my tenure, I acquired a wealth of knowledge and skills, including website design, layout creation, app design, and Photoshop editing. I also gained experience in poster and brochure design. Additionally, I honed my skills in slicing, working extensively with HTML, CSS, and JavaScript.</p>
      </div>
    </div>
  );
}

function Experience1() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-center relative shrink-0 w-full" data-name="Experience">
      <Content10 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] whitespace-pre">UI/UX Designer</p>
      </div>
    </div>
  );
}

function CompanyAndRole1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Company and role">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-10" data-name="image 6" style={{ backgroundImage: `url('${imgImage6}')` }} />
      <Content11 />
    </div>
  );
}

function DateAndPlace1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Date and place">
      <CompanyAndRole1 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47516b] text-[10px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Jan 2019 - Jan 2021</p>
      </div>
    </div>
  );
}

function Experience2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative rounded-[8px] shrink-0 w-full" data-name="Experience">
      <DateAndPlace1 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px pb-4 pt-1.5 px-0 relative self-stretch shrink-0" data-name="Content">
      <Experience2 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">After completing one year at Memorres, I transitioned to the role of a UI/UX designer, which was a fantastic experience. I learned a lot, including empathy mapping, creating user personas, developing customer journey maps, wireframing, user interface design, and prototyping. Additionally, I collaborated with the development team, working with my favorite technologies: HTML, CSS, PUG, ITCSS, and JavaScript.</p>
      </div>
    </div>
  );
}

function Experience3() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-center relative shrink-0 w-full" data-name="Experience">
      <Content12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#063e8b] content-stretch flex gap-2.5 items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-10">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[22px]" data-name="image 3" style={{ backgroundImage: `url('${imgImage3}')` }} />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0" data-name="Content">
      <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e48] text-[18px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px] whitespace-pre">Design Lead</p>
      </div>
    </div>
  );
}

function CompanyAndRole2() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Company and role">
      <Frame14 />
      <Content13 />
    </div>
  );
}

function DateAndPlace2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Date and place">
      <CompanyAndRole2 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47516b] text-[10px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Jan 2021 - Present</p>
      </div>
    </div>
  );
}

function Experience4() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative rounded-[8px] shrink-0 w-full" data-name="Experience">
      <DateAndPlace2 />
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-2.5 grow items-start justify-start min-h-px min-w-px pb-4 pt-1.5 px-0 relative self-stretch shrink-0" data-name="Content">
      <Experience4 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d3d3d] text-[14px] tracking-[0.14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[21px]">After two years at Memorres, I was promoted to Design Lead. Leading a team of three junior designers and two developers, I gained valuable experience in teamwork and project management. This role enhanced my skills in understanding client requirements, analyzing and researching competitors, and delivering projects on time with comprehensive testing reports. My efforts contributed significantly to the growth of Memorres in the industry. Additionally, I worked extensively with Webflow, a fantastic tool for website development, and earned three Webflow certifications.</p>
      </div>
    </div>
  );
}

function Experience5() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-center relative shrink-0 w-full" data-name="Experience">
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full" data-name="Content">
      <Experience1 />
      <Experience3 />
      <Experience5 />
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="Experience section">
      <Frame10 />
      <Content15 />
    </div>
  );
}

function SkillsSection1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="skills-section">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[34px] items-start justify-start p-[38px] relative size-full">
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
}

export default function ResumeOnline() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-start relative size-full" data-name="Resume - Online">
      <Frame13 />
      <StepIconWrap1 />
      <SkillsSection1 />
    </div>
  );
}