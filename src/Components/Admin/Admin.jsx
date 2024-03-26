import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, editCategory, fetchCategories } from '../../Slice/ProductsSlice';
const Admin = () => {
    const [formData, setformData] = useState({
        name: '',
        price: 0,
        prevprice: 0,
        infonew: '',
        infosale: '',
    })
    const [file, setFile] = useState("");

    const [editingId, setEditingId] = useState(null);
    const dispatch = useDispatch();
    const productlist = useSelector(state => state.categories.items);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === "price" || name === "prevprice") {
            newValue = parseFloat(value);
            if (isNaN(newValue)) {
                newValue = "";
            }
        }
        setformData({ ...formData, [name]: newValue });
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const blobUrl = URL.createObjectURL(selectedFile);
        setFile(blobUrl);
        console.log(blobUrl + " url");
    };
    const handleEdit = (product) => {
        setEditingId(product.id)
        setformData({
            ...formData,
            name: product.name,
            price: product.price,
            prevprice: product.prevprice,
            infonew: product.infonew,
            infosale: product.infosale,
            image: formData.image || product.image
        })
    }

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteCategory(id));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            dispatch(editCategory({ id: editingId, category: formData }))
        } else {
            console.log(formData);
            dispatch(addCategory({
                id: String(Number(productlist[productlist.length - 1].id) + 1),
                name: formData.name,
                image: file,
                price: formData.price,
                prevprice: formData.prevprice,
                count: 0,
                infonew: formData.infonew,
                infosale: formData.infosale
            }))
        }
        setformData({
            image: null,
            name: '',
            price: 0,
            prevprice: 0,
            infonew: '',
            infosale: ''
        });
        setFile("")
        setEditingId(null)
    }


    return (
        <div className="admin">
            <div className='container'>

                <form action="#" onSubmit={handleSubmit}>
                    <Input type='file' name='image' onChange={handleFileChange} />
                    <Input placeholder="name" name='name' value={formData.name} onChange={handleChange} />
                    <Input placeholder="price" name='price' value={formData.price} onChange={handleChange} />
                    <Input placeholder="prevprice" name='prevprice' value={formData.prevprice} onChange={handleChange} />
                    <Input placeholder="infonew" name='infonew' value={formData.infonew} onChange={handleChange} />
                    <Input placeholder="infosale" name='infosale' value={formData.infosale} onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>
                <div className="admin-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Prevprice</th>
                                <th>InfoNew</th>
                                <th>InfoSale</th>
                                <th>Image Url</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productlist.map(product =>
                            (<tr key={Number(product.id)}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.prevprice}</td>
                                <td>{product.infonew}</td>
                                <td>{product.infosale}</td>
                                <td>{product.image}</td>
                                <td>
                                    <button onClick={() => handleEdit(product)} className='edit'>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>)
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Admin