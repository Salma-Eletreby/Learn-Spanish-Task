import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const mongo = "mongodb+srv://salma:7IkyHifsfDt1tisv@maincluster.eh01p.mongodb.net/"
  if (req.method === "GET") {
    const client = new MongoClient(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();

      const database = client.db("learn-spanish");

      const collection = database.collection("fustration_task");
      const allData = await collection.find({}).toArray();

      res.status(200).json(allData);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else if (req.method === "POST") {
    const data = req.body;

    const client = new MongoClient(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    
    try {
      await client.connect();
      const database = client.db("learn-spanish");

      const collection = database.collection("fustration_task");

      await collection.insertOne( data );

      res.status(201).json({ message: "Data saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
