import React, { useState } from 'react';

const Email = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', formData.nome);
    console.log('Email:', formData.email);
    console.log('Mensagem:', formData.mensagem);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div>
        <h1 className='text-4xl p-4 flex justify-center'>Entre em contato conosco!</h1>
        <div className="p-4 flex m-auto ">
          <form onSubmit={handleSubmit} className="m-auto">
            <label htmlFor="nome" className="flex mb-2 font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="w-96 px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-96 px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            {/* Nova seção de formulário */}
            <label htmlFor="mensagem" className="block mb-2 font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Digite sua mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              className="w-96 px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <button type="submit" className="flex bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;