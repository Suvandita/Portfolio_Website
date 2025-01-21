#include <iostream>
#include <vector>
using namespace std;
void calculateNeed(vector<vector<int>> &need, vector<vector<int>> &max, vector<vector<int>> &alloc, int np, int nr) {
    for (int i = 0; i < np; i++) {
        for (int j = 0; j < nr; j++) {
            need[i][j] = max[i][j] - alloc[i][j];
        }
    }
}
bool isSafe(vector<int> &processes, vector<int> &avail, vector<vector<int>> &max, vector<vector<int>> &alloc, int np, int nr) {
    vector<vector<int>> need(np, vector<int>(nr));
    calculateNeed(need, max, alloc, np, nr);
    vector<bool> finish(np, false);
    vector<int> safeSeq(np);
    vector<int> work = avail;
    int count = 0;
    while (count < np) {
        bool found = false;
        for (int p = 0; p < np; p++) {
            if (!finish[p]) {
                int j;
                for (j = 0; j < nr; j++) {
                    if (need[p][j] > work[j]) break;
                }
                if (j == nr) {
                    for (int k = 0; k < nr; k++) {
                        work[k] += alloc[p][k];
                    }
                    safeSeq[count++] = processes[p];
                    finish[p] = true;
                    found = true;
                }
            }
        }
        if (!found) {
            cout << "System is not in a safe state.\n";
            return false;
        }
    }
    cout << "System is in a safe state.\nSafe sequence is: ";
    for (int i = 0; i < np; i++) {
        cout << safeSeq[i] << " ";
    }
    cout << endl;
    return true;
}
void requestResources(vector<int> &processes, vector<int> &avail, vector<vector<int>> &max, vector<vector<int>> &alloc, int np, int nr) {
    int process_num;
    vector<int> request(nr);

    cout << "Enter the process number making the request (0-" << np - 1 << "): ";
    cin >> process_num;
    cout << "Enter the requested resources: ";
    for (int i = 0; i < nr; i++) {
        cin >> request[i];
    }
    for (int i = 0; i < nr; i++) {
        if (request[i] > avail[i]) {
            cout << "Requested resources are greater than available resources. Request cannot be granted.\n";
            return;
        }
    }
    for (int i = 0; i < nr; i++) {
        if (request[i] > max[process_num][i] - alloc[process_num][i]) {
            cout << "Requested resources exceed maximum claim for process. Request cannot be granted.\n";
            return;
        }
    }
    for (int i = 0; i < nr; i++) {
        avail[i] -= request[i];
        alloc[process_num][i] += request[i];
        max[process_num][i] -= request[i];
    }
    if (isSafe(processes, avail, max, alloc, np, nr)) {
        cout << "Request can be granted. Resources have been allocated.\n";} 
    else {
        cout << "Request cannot be granted as it leads to unsafe state. Rolling back the request.\n";
        for (int i = 0; i < nr; i++) {
            avail[i] += request[i];
            alloc[process_num][i] -= request[i];
            max[process_num][i] += request[i];
        }
    }
}
int main() {
    int np, nr;
    cout << "Enter the number of processes: ";
    cin >> np;
    cout << "Enter the number of resources: ";
    cin >> nr;
    vector<int> processes(np), avail(nr);
    vector<vector<int>> max(np, vector<int>(nr)), alloc(np, vector<int>(nr));
    cout << "Enter the allocation matrix:\n";
    for (int i = 0; i < np; i++) {
        processes[i] = i;
        for (int j = 0; j < nr; j++) {
            cin >> alloc[i][j];
        }
    }
    cout << "Enter the maximum demand matrix:\n";
    for (int i = 0; i < np; i++) {
        for (int j = 0; j < nr; j++) {
            cin >> max[i][j];
        }
    }
    cout << "Enter the available resources: ";
    for (int i = 0; i < nr; i++) {
        cin >> avail[i];
    }
    if (isSafe(processes, avail, max, alloc, np, nr)) {
        cout << "System is in a safe state.\n";
    } else {
        cout << "System is not in a safe state.\n";
    }
    char ch;
    cout << "Do you want to request resources for a process? (y/n): ";
    cin >> ch;
    if (ch == 'y' || ch == 'Y') {  requestResources(processes, avail, max, alloc, np, nr);}
    return 0;
}
