import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { API } from "../config";

interface ListItem {
    title: string;
    nominal: number;
    type: string;
    category: string;
    date: Date;
    id: string;
}

async function GetList(req: Request, res: Response, next: NextFunction) {
    const { category, datefrom, dateto } = req.query;
    let uri = API;
    try {
        if (category) {
            uri += `?category=${category}`;
        };
        const { data } = await axios.get(`${uri}`);
        console.log(data);

        if (datefrom && dateto) {
            res.status(200).send({
                message: "GetList by date query success",
                data: data.filter((listitem: ListItem) => (
                    Number(datefrom) <= Number(listitem.date) &&
                    Number(listitem.date) <= Number(dateto)))
            })
        };
        
        res.status(200).send({
            message: "GetList success",
            data: data
        })
    } catch (err) {
        next(err);
    };
};

async function GetListItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const { data } = await axios.get(`${API}/${id}`);
        console.log(data);
        res.status(200).send({
            message: "GetListItem success",
            data: data
        })
    } catch (err) {
        next(err);
    };
};

async function PostListItem(req: Request, res: Response, next: NextFunction) {
    const { title, nominal, type, category, date } = req.body;
    try {
        const { data } = await axios.post(`${API}`, {
            title,
            nominal,
            type,
            category,
            date
        })
        res.status(200).send({
            message: "PostListItem success",
            data: data,
        });
    } catch (err) {
      next(err);
    };
};

async function PutListItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title, nominal, type, category, date } = req.body;
    try {
        const { data } = await axios.put(`${API}/${id}`, {
            title,
            nominal,
            type,
            category,
            date
        })
        res.status(200).send({
            message: "PutListItem success, I think...?",
            data: data,
        });
    } catch (err) {
      next(err);
    };
};

async function DeleteListItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const { data } = await axios.delete(`${API}/${id}`);
        console.log(data);
        res.status(200).send({
            message: "DeleteListItem success",
            data: data
        })
    } catch (err) {
        next(err);
    };
};

// async function GetListByCategory(req: Request, res: Response, next: NextFunction) {
//     const { category } = req.query;
//     console.log(category);
//     try {
//         const { data } = await axios.get(`${API}?`);
//         console.log(data);
//         res.status(200).send({
//             message: "GetListByCategory success",
//             data: data
//         })
//     } catch (err) {
//         next(err);
//     };
// };

export { GetList, GetListItem, PostListItem, PutListItem, DeleteListItem };