const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 bg-gray-200">
      <h2 className="font-bold">Address:</h2>
      <p>100 England St, London E4 4AA</p>
      <h2 className="font-bold">Contact:</h2>
      <a href="tel:+447452767171">07377-156-973</a>

      <p className="text-center pt-6 text-gray-500">
        &copy; {new Date().getFullYear()} Developed By Farhana Aktar
      </p>
    </div>
  );
};

export default Footer;
