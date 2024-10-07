import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerIssues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIssues = async () => {
        try {
            const response = await fetch('https://localhost:44397/api/Issue');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setIssues(data);
        } catch (error) {
            setError(error.message);
            toast.error(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const solveIssue = async (id) => {
        try {
            const response = await fetch(`https://localhost:44397/api/Issue/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to solve issue');
            }

            toast.success("Issue solved!");
            fetchIssues(); // Refresh the list of issues after the update
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteIssue = async (id) => {
        try {
            const response = await fetch(`https://localhost:44397/api/Issue/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Failed to delete issue');
            toast.success("Issue deleted!");
            fetchIssues();
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    if (loading) {
        return <div className="text-center text-lg text-orange-500">Loading...</div>;
    }

    return (
        <div className=" p-6 bg-green-500  shadow-md py-10">
            <h1 className=" text-white text-2xl font-bold text-center mb-4">Customer Issues</h1>
            <ToastContainer />
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-green-600 text-white">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Full Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Subject</th>
                        <th className="px-4 py-2 border">Message</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => (
                        <tr key={issue.Id} className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2 border">{issue.Id}</td>
                            <td className="px-4 py-2 border">{issue.FullName}</td>
                            <td className="px-4 py-2 border">{issue.Email}</td>
                            <td className="px-4 py-2 border">{issue.Subject}</td>
                            <td className="px-4 py-2 border">{issue.Message}</td>
                            <td className="px-4 py-2 border">{issue.Status ? 'Resolved' : 'Unresolved'}</td>
                            <td className="px-4 py-2 border   grid justify-center grid-flow-col">
                                <button
                                    onClick={() => solveIssue(issue.Id)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded mr-2"
                                >
                                    Solve Issue
                                </button>
                                <button
                                    onClick={() => deleteIssue(issue.Id)}
                                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                                >
                                    Delete Issue
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerIssues;
