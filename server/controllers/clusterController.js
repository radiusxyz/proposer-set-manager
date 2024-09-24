import clusterService from "../services/clusterService.js";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getAllClusters = async (_, res) => {
  try {
    const clusters = await clusterService.getAllClusters();
    res.status(200).json(clusters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGeneratedClusters = async (req, res) => {
  try {
    const { walletAddress } = req.params;
    const clusters = await clusterService.getGeneratedClusters(walletAddress);
    res.status(200).json(clusters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getJoinedClusters = async (req, res) => {
  try {
    const { walletAddress } = req.params;
    const clusters = await clusterService.getJoinedClusters(walletAddress);
    res.status(200).json(clusters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCluster = async (req, res) => {
  try {
    const { clusterId } = req.params;
    const cluster = await clusterService.getCluster(clusterId);
    res.status(200).json(cluster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCluster = async (req, res) => {
  try {
    const { clusterId } = req.params;
    const updateData = req.body;
    const updatedCluster = await clusterService.updateCluster(
      clusterId,
      updateData
    );

    if (!updatedCluster) {
      return res.status(404).json({ message: "Cluster not found" });
    }

    res.status(200).json(updatedCluster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const downloadSequencer = (_, res) => {
  try {
    const filePath = path.join(__dirname, "../bin/sequencer.bin");
    console.log(filePath);
    res.download(filePath, "sequencer.bin", (err) => {
      if (err) {
        console.error("Error during file download:", err);
        res.status(500).json({ error: "File download failed" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const clusterController = {
  getAllClusters,
  getGeneratedClusters,
  getJoinedClusters,
  getCluster,
  updateCluster,
  downloadSequencer,
};

export default clusterController;
