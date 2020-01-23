<template>
     <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Data Pembelian</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Data Pembelian</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <a href="#" class="btn btn-success btn-md">Beli</a>
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0" style="height: 300px;">
                <table class="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>No.Pemesanan</th>
                      <th>Makanan</th>
                      <th>Kantin</th>
                      <th>Stand</th>
                      <th>Jumlah</th>
                      <th>Harga</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>FREK27/23/01/2020/000001</td>
                      <td>Ayam Geprek</td>
                      <td>Kantin Murmer</td>
                      <td>Stand 8</td>
                      <td>2</td>
                      <td>Rp12.000</td>
                      <td>Rp24.000</td>
                      <td><span class="badge bg-danger">Belum Bayar</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>ALP26/21/01/2020/000023</td>
                      <td>Es Coffee Float</td>
                      <td>Kantin Kopi.ID</td>
                      <td>Stand 11</td>
                      <td>5</td>
                      <td>Rp8.000</td>
                      <td>Rp40.000</td>
                      <td><span class="badge bg-primary">Sudah Bayar</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>