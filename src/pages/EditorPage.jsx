import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const MyEditor = () => {
  const editorRef = useRef(null);

  const exportToPDF = async () => {
    const content = editorRef.current.getContent();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = content;
    document.body.appendChild(wrapper);

    const canvas = await html2canvas(wrapper, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("document.pdf");

    document.body.removeChild(wrapper);
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <Editor
        apiKey="ex0o74qcy4u5dq94hlsdzu0gli1174d0ni02vnwu2p292qrd"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Write something amazing...</p>"
        init={{
          height: 400,
          menubar: true,
          plugins: ["lists link image preview", "code"],
          toolbar:
            "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | preview code",
        }}
      />

      <button
        onClick={exportToPDF}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default MyEditor;
