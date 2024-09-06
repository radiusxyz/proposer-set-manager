import clusterService from "../services/clusterService.js";

const getAllClusters = async (req, res) => {
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

const getSequencersInCluster = async (req, res) => {
  try {
    const { clusterId } = req.params;
    const sequencers = await clusterService.getSequencersInCluster(clusterId);
    res.status(200).json(sequencers);
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

const clusterController = {
  getAllClusters,
  getGeneratedClusters,
  getJoinedClusters,
  getSequencersInCluster,
  updateCluster,
};

export default clusterController;
