import type { Doc } from "content-collections";
import { Logo } from "@/ui/icons";

interface iDocumentOGTemplate {
  document: Doc;
}

const DocumentOGTemplate = (props: iDocumentOGTemplate) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FAFAFA",
        color: "#121212",
        paddingTop: "40px",
        paddingBottom: "76px",
        paddingLeft: "64px",
        paddingRight: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Logo width="52px" height="52px" />
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "39px",
            fontFamily: "Geist",
          }}
        >
          pheralb/toast
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Document Title */}
        <h1
          style={{
            fontFamily: "Onest",
            fontSize: "80px",
            fontWeight: "40px",
            marginTop: "44px",
            marginBottom: "10px",
            lineHeight: "1.1",
          }}
        >
          {props.document.title}
        </h1>
        {/* Document Description */}
        <p
          style={{
            fontSize: "38px",
            color: "#89909c",
            margin: "0px",
            fontWeight: "normal",
            fontFamily: "Geist",
          }}
        >
          {props.document.description}
        </p>
      </div>
    </div>
  );
};

export default DocumentOGTemplate;
